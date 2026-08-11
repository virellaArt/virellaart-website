#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const argv = process.argv.slice(2);
const argValue = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : null;
};
const hasArg = (name) => argv.includes(name);
const topN = Math.max(1, Math.min(100, Number(argValue('--top') || 25)));
const minImpressions = Math.max(0, Number(argValue('--min-impressions') || 1));
const jsonOnly = hasArg('--json');
const selfTest = hasArg('--self-test');

const decodeHtml = (s='') => s
  .replace(/&amp;/gi,'&').replace(/&quot;/gi,'"').replace(/&#39;/gi,"'")
  .replace(/&lt;/gi,'<').replace(/&gt;/gi,'>')
  .replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCharCode(parseInt(n,16)));
const stripTags = (s='') => decodeHtml(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim());
const firstMatch = (html, re) => { const m = re.exec(html); return m ? stripTags(m[1] || '') : ''; };
const metaContent = (html, name) => {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const n = tag.match(/(?:name|property)\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase();
    if (n !== name.toLowerCase()) continue;
    return decodeHtml(tag.match(/content\s*=\s*["']([^"']*)["']/i)?.[1] || '').trim();
  }
  return '';
};
const canonicalHref = (html) => {
  const links = html.match(/<link\b[^>]*>/gi) || [];
  for (const tag of links) {
    const rel = tag.match(/rel\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase() || '';
    if (!rel.split(/\s+/).includes('canonical')) continue;
    return decodeHtml(tag.match(/href\s*=\s*["']([^"']+)["']/i)?.[1] || '').trim();
  }
  return '';
};
const normalizePath = (value) => {
  let p = String(value || '').trim();
  if (!p) return '/';
  try { if (/^https?:\/\//i.test(p)) p = new URL(p).pathname; } catch {}
  try { p = decodeURIComponent(p); } catch {}
  p = p.split('?')[0].split('#')[0].replace(/\\/g,'/').replace(/\/{2,}/g,'/');
  if (!p.startsWith('/')) p = '/' + p;
  if (p !== '/') p = p.replace(/\/$/,'');
  return p || '/';
};
const routeWithSlash = (p) => p === '/' ? '/' : normalizePath(p) + '/';
const localeRoots = new Set(['tr','de','fr','it','ru','ar','bg','ro','el','es','sr','kk','uz','pt','pl']);
const commercialRoots = new Set(['living-rooms','bedrooms','dining-rooms','tv-units','markets']);
const isEnglishCommercial = (p) => {
  const parts = normalizePath(p).split('/').filter(Boolean);
  if (!parts.length) return false;
  if (localeRoots.has(parts[0])) return false;
  return commercialRoots.has(parts[0]);
};
const classifyRoute = (p) => {
  const parts = normalizePath(p).split('/').filter(Boolean);
  if (!parts.length) return 'other';
  if (parts[0] === 'markets') return parts.length === 1 ? 'market-index' : 'market';
  if (commercialRoots.has(parts[0])) return parts.length === 1 ? 'category' : 'product';
  return 'other';
};
const routeFromHtmlFile = (dist, file) => {
  const rel = path.relative(dist, file).replace(/\\/g,'/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0,-11).replace(/^\/+|\/+$/g,'') + '/';
  if (rel.endsWith('.html')) return '/' + rel.slice(0,-5).replace(/^\/+|\/+$/g,'') + '/';
  return null;
};
const walkHtml = (dir) => {
  const out=[]; const stack=[dir];
  while(stack.length){ const cur=stack.pop(); for(const ent of fs.readdirSync(cur,{withFileTypes:true})){ const full=path.join(cur,ent.name); if(ent.isDirectory()) stack.push(full); else if(ent.isFile() && ent.name.toLowerCase().endsWith('.html')) out.push(full); } }
  return out;
};
const expectedCtr = (pos) => {
  if (!(pos > 0)) return 0;
  if (pos <= 1.5) return 18;
  if (pos <= 3) return 10;
  if (pos <= 5) return 6;
  if (pos <= 10) return 3;
  if (pos <= 15) return 1.5;
  if (pos <= 30) return 0.7;
  return 0.2;
};
const genericTitle = (title, type) => {
  if (!title) return false;
  if (type !== 'product') return false;
  return /\|\s*(Living Rooms|Bedrooms|Dining Rooms|TV Units)\s*\|\s*VIRELLAART\s*$/i.test(title);
};
const analyzeHtml = (html, route) => {
  const title = firstMatch(html, /<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m=>stripTags(m[1]));
  const description = metaContent(html,'description');
  const robots = metaContent(html,'robots').toLowerCase();
  const canonical = canonicalHref(html);
  const body = firstMatch(html, /<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const wordCount = body ? body.split(/\s+/).filter(Boolean).length : 0;
  const hrefs = [...html.matchAll(/<a\b[^>]*href\s*=\s*["']([^"']+)["']/gi)].map(m=>decodeHtml(m[1]));
  const whatsappLinks = hrefs.filter(h=>/(?:wa\.me|api\.whatsapp\.com)/i.test(h)).length;
  const hasProductSchema = /["']@type["']\s*:\s*["']Product["']/i.test(html);
  const type = classifyRoute(route);
  return {title,description,h1s,canonical,robots,wordCount,hrefs,whatsappLinks,hasProductSchema,type,noindex:robots.includes('noindex'),genericTitle:genericTitle(title,type)};
};
const resolveHref = (href, fromRoute, propertyOrigin) => {
  if (!href || /^(?:mailto:|tel:|javascript:|#)/i.test(href)) return null;
  try {
    const base = new URL(routeWithSlash(fromRoute), propertyOrigin);
    const u = new URL(href, base);
    if (u.origin !== propertyOrigin) return null;
    return normalizePath(u.pathname);
  } catch { return null; }
};
const loadGsc = (file) => {
  const raw=JSON.parse(fs.readFileSync(file,'utf8').replace(/^\uFEFF/,''));
  if (!raw || !Array.isArray(raw.Pages)) throw new Error('GSC JSON icinde Pages dizisi yok');
  const origin = new URL(raw.Property || 'https://www.virellaart.com/').origin;
  const agg=new Map();
  for(const r of raw.Pages){
    if (!r || !r.Value) continue;
    let u; try{u=new URL(r.Value);}catch{continue;}
    if (u.origin !== origin) continue;
    const key=normalizePath(u.pathname);
    const imp=Number(r.Impressions)||0, clicks=Number(r.Clicks)||0, pos=Number(r.Position)||0;
    const a=agg.get(key)||{path:key,clicks:0,impressions:0,posWeighted:0,rows:0};
    a.clicks+=clicks; a.impressions+=imp; a.posWeighted+=pos*imp; a.rows++; agg.set(key,a);
  }
  for(const a of agg.values()){
    a.position=a.impressions? a.posWeighted/a.impressions : 0;
    a.ctr=a.impressions? (100*a.clicks/a.impressions) : 0;
    delete a.posWeighted;
  }
  return {raw,origin,agg};
};

const gitRouteChangeDate = (repo, route) => {
  const rel='src/components/ProductTemplate.astro';
  const r=spawnSync('git',['log','-1','--format=%cI','-S'+route,'--',rel],{cwd:repo,encoding:'utf8',windowsHide:true});
  if(r.status!==0) return null;
  const v=(r.stdout||'').trim();
  if(!v) return null;
  const d=new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
};

const findGsc = (repo) => {
  const explicit=argValue('--gsc');
  const candidates=[
    explicit,
    process.env.VIRELLA_GSC_JSON,
    path.join(path.dirname(repo),'VIRELLAART-SEO-DATA','VIRELLAART-GSC-90D.json'),
    path.join(os.homedir(),'Documents','VIRELLAART-SEO-DATA','VIRELLAART-GSC-90D.json'),
    path.join(repo,'VIRELLAART-GSC-90D.json')
  ].filter(Boolean);
  for(const c of candidates){const full=path.resolve(c); if(fs.existsSync(full) && fs.statSync(full).isFile()) return full;}
  throw new Error('GSC JSON bulunamadi. --gsc <dosya> kullanin veya Documents\\VIRELLAART-SEO-DATA altina koyun.');
};
const scoreRow = (x) => {
  if (x.recentSeoChange) return Math.max(0, Math.min(100, Math.round(35 + Math.min(20, Math.log2(x.impressions+1)*4))));
  const imp=x.impressions, pos=x.position, ctr=x.ctr, type=x.type;
  let score=0;
  score += Math.min(24, Math.log2(imp+1)*5);
  if(pos>0 && pos<=3) score+=12; else if(pos<=5) score+=20; else if(pos<=10) score+=25; else if(pos<=15) score+=20; else if(pos<=30) score+=11; else score+=4;
  const exp=expectedCtr(pos);
  if(imp>=3 && clicksSafe(x)===0) score+=18; else if(exp && ctr < exp*0.5) score+=10;
  if(type==='product') score+=8; else if(type==='category') score+=5; else if(type==='market') score+=6;
  if(x.genericTitle) score+=20;
  if(!x.canonical) score+=25;
  if(x.h1Count!==1) score+=25;
  if(type==='product' && !x.hasProductSchema) score+=22;
  if(type==='product' && x.whatsappLinks===0) score+=12;
  if(type==='product' && x.inboundLinks<=2) score+=Math.max(0,8-x.inboundLinks*2);
  if(type==='product' && x.wordCount<350) score+=8;
  return Math.max(0,Math.min(100,Math.round(score)));
};
const clicksSafe = (x)=>Number(x.clicks)||0;
const actionFor = (x) => {
  if(x.recentSeoChange) return 'WAIT_GSC_REFRESH';
  if(!x.canonical || x.h1Count!==1 || (x.type==='product' && !x.hasProductSchema)) return 'TECHNICAL';
  if(x.type==='product' && x.genericTitle && x.impressions>=3 && x.position>0 && x.position<=15 && x.ctr<1) return 'TITLE_CTR';
  if(x.type==='product' && x.position>15 && x.position<=35 && x.impressions>=5) return 'CONTENT_AUTHORITY';
  if(x.type==='product' && x.inboundLinks<=2 && x.impressions>=2) return 'INTERNAL_LINKS';
  if(x.type==='product' && x.whatsappLinks===0) return 'CTA';
  if(x.type==='category' && x.impressions>=5 && x.ctr<1) return 'CATEGORY_CTR_MONITOR';
  if(x.type==='market' && x.impressions>=3 && x.ctr<1) return 'MARKET_GROWTH';
  if(x.impressions>=3 && x.position<=15 && x.ctr<1) return 'CTR_MONITOR';
  return 'MONITOR';
};
const reasonFor = (x) => {
  const r=[];
  if(x.recentSeoChange) r.push('SEO title changed after GSC period');
  if(x.genericTitle) r.push('generic title');
  if(x.impressions>=3 && x.ctr<1) r.push('CTR low');
  if(x.position>0 && x.position<=10) r.push('page 1');
  else if(x.position<=15) r.push('near page 1');
  else if(x.position<=35) r.push('ranking growth');
  if(x.type==='product' && x.inboundLinks<=2) r.push('low inbound links');
  if(!x.canonical) r.push('canonical missing');
  if(x.h1Count!==1) r.push('H1 issue');
  if(x.type==='product' && !x.hasProductSchema) r.push('Product schema missing');
  if(x.type==='product' && x.whatsappLinks===0) r.push('WhatsApp CTA missing');
  return r.join(', ') || 'monitor';
};

function runSelfTest(){
  const tests=[];
  const assert=(name,ok)=>{tests.push({name,ok}); if(!ok) throw new Error('SELF TEST FAIL: '+name);};
  assert('normalize slash',normalizePath('/living-rooms/alex/')==='/living-rooms/alex');
  assert('normalize URL',normalizePath('https://www.virellaart.com/living-rooms/alex/')==='/living-rooms/alex');
  assert('generic title',genericTitle('Alex Sofa Set | Living Rooms | VIRELLAART','product')===true);
  assert('optimized title',genericTitle('Alex Luxury Living Room Set | VIRELLAART','product')===false);
  const sample='<html><head><title>Alex Sofa Set | Living Rooms | VIRELLAART</title><meta name="description" content="Test"><link rel="canonical" href="https://www.virellaart.com/living-rooms/alex/"><script type="application/ld+json">{"@type":"Product"}</script></head><body><h1>Alex Sofa Set</h1><a href="https://wa.me/905">WhatsApp</a></body></html>';
  const a=analyzeHtml(sample,'/living-rooms/alex/');
  assert('title parser',a.title==='Alex Sofa Set | Living Rooms | VIRELLAART');
  assert('H1 parser',a.h1s.length===1 && a.h1s[0]==='Alex Sofa Set');
  assert('canonical parser',a.canonical.includes('/living-rooms/alex/'));
  assert('schema parser',a.hasProductSchema===true);
  assert('whatsapp parser',a.whatsappLinks===1);
  console.log('SELF_TEST_OK='+tests.length);
}

if(selfTest){runSelfTest(); process.exit(0);}

const scriptFile=fileURLToPath(import.meta.url);
const repo=path.resolve(path.dirname(scriptFile),'..');
const dist=path.join(repo,'dist');
if(!fs.existsSync(dist)) throw new Error('dist bulunamadi. Once npm.cmd run build:astro calistirin.');
const gscFile=findGsc(repo);
const {raw:gscRaw,origin,agg:gsc}=loadGsc(gscFile);
const files=walkHtml(dist);
const pages=new Map();
for(const file of files){
  const route=routeFromHtmlFile(dist,file); if(!route) continue;
  const html=fs.readFileSync(file,'utf8');
  const a=analyzeHtml(html,route);
  pages.set(normalizePath(route),{route:routeWithSlash(route),...a});
}
const inbound=new Map();
for(const [from,p] of pages){
  for(const href of p.hrefs){
    const target=resolveHref(href,from,origin); if(!target || target===from) continue;
    inbound.set(target,(inbound.get(target)||0)+1);
  }
}
const gscEnd = gscRaw.Period?.End ? new Date(gscRaw.Period.End+'T23:59:59Z') : null;
const rows=[];
for(const [p,g] of gsc){
  if(!isEnglishCommercial(p) || g.impressions<minImpressions) continue;
  const site=pages.get(p);
  if(!site) continue;
  const row={
    path:p,
    route:site.route,
    type:site.type,
    clicks:g.clicks,
    impressions:g.impressions,
    ctr:Number(g.ctr.toFixed(2)),
    position:Number(g.position.toFixed(2)),
    title:site.title,
    descriptionLength:site.description.length,
    h1Count:site.h1s.length,
    h1:site.h1s[0]||'',
    canonical:site.canonical,
    noindex:site.noindex,
    genericTitle:site.genericTitle,
    wordCount:site.wordCount,
    inboundLinks:inbound.get(p)||0,
    whatsappLinks:site.whatsappLinks,
    hasProductSchema:site.hasProductSchema
  };
  const changedAt=site.type==='product' ? gitRouteChangeDate(repo,routeWithSlash(p)) : null;
  row.seoTitleChangedAt=changedAt ? changedAt.toISOString() : null;
  row.recentSeoChange=Boolean(changedAt && gscEnd && changedAt > gscEnd && !site.genericTitle);
  row.action=actionFor(row);
  row.score=scoreRow(row);
  row.reason=reasonFor(row);
  rows.push(row);
}
rows.sort((a,b)=>b.score-a.score || b.impressions-a.impressions || a.position-b.position || a.path.localeCompare(b.path));
const report={
  engine:'VIRELLAART SEO Opportunity Engine',
  version:'1.0.0',
  generatedAt:new Date().toISOString(),
  property:gscRaw.Property,
  period:gscRaw.Period,
  gscFile,
  gscPageRows:gscRaw.Pages.length,
  normalizedGscPages:gsc.size,
  distHtmlFiles:files.length,
  analyzedCommercialPages:rows.length,
  top:rows.slice(0,topN)
};
if(jsonOnly){console.log(JSON.stringify(report,null,2)); process.exit(0);}
console.log('=== VIRELLAART SEO OPPORTUNITY ENGINE v1.0 ===');
console.log(`GSC: ${gscFile}`);
console.log(`PERIOD: ${gscRaw.Period?.Start || '?'} -> ${gscRaw.Period?.End || '?'}`);
console.log(`GSC_PAGE_ROWS=${gscRaw.Pages.length} | NORMALIZED=${gsc.size} | DIST_HTML=${files.length} | COMMERCIAL_MATCHES=${rows.length}`);
console.log('');
console.log('SCORE | IMP | CLK | POS   | CTR   | ACTION               | PAGE');
console.log('------|-----|-----|-------|-------|----------------------|-----');
for(const x of rows.slice(0,topN)){
  const f=(v,n)=>String(v).padStart(n,' ');
  console.log(`${f(x.score,5)} | ${f(x.impressions,3)} | ${f(x.clicks,3)} | ${f(x.position.toFixed(2),5)} | ${f(x.ctr.toFixed(1)+'%',5)} | ${x.action.padEnd(20,' ')} | ${x.route}`);
  console.log(`      TITLE : ${x.title}`);
  console.log(`      WHY   : ${x.reason}`);
}
console.log('');
console.log('NOTE: WAIT_GSC_REFRESH suppresses pages whose SEO title changed after the GSC snapshot ended.');
console.log('NOTE: Scores prioritize commercial opportunity; they are decision support, not ranking guarantees.');
