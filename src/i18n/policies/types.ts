import type { Language } from "../config";

export type PolicySection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
};

export type PolicyDocument = {
  title: string;
  description: string;
  intro: string;
  sections: PolicySection[];
};

export type LocalizedPolicyDocuments = Record<
  Language,
  PolicyDocument
>;
