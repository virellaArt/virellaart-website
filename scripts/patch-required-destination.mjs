#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const file = path.join(
  process.cwd(),
  "src",
  "components",
  "ProductTemplate.astro",
);

let source = fs.readFileSync(file, "utf8");

const countryOld = `                  maxlength="80"\n                  placeholder={productQuote.country}\n                />`;
const countryNew = `                  maxlength="80"\n                  placeholder={productQuote.country}\n                  required\n                  aria-required="true"\n                />`;

const cityOld = `                  maxlength="80"\n                  placeholder={productQuote.city}\n                />`;
const cityNew = `                  maxlength="80"\n                  placeholder={productQuote.city}\n                  required\n                  aria-required="true"\n                />`;

if (!source.includes('id="quoteCountry"') || !source.includes('id="quoteCity"')) {
  throw new Error("Quote destination fields not found.");
}

if (!source.includes('id="quoteCountry"\n                  name="delivery-country"\n                  type="text"\n                  autocomplete="country-name"\n                  maxlength="80"\n                  placeholder={productQuote.country}\n                  required')) {
  if (!source.includes(countryOld)) {
    throw new Error("Country input marker not found.");
  }
  source = source.replace(countryOld, countryNew);
}

if (!source.includes('id="quoteCity"\n                  name="delivery-city"\n                  type="text"\n                  autocomplete="address-level2"\n                  maxlength="80"\n                  placeholder={productQuote.city}\n                  required')) {
  if (!source.includes(cityOld)) {
    throw new Error("City input marker not found.");
  }
  source = source.replace(cityOld, cityNew);
}

const oldListeners = `      [\n        countryInput,\n        cityInput,\n        customizationInput,\n      ].forEach((field) => {\n        field?.addEventListener(\n          "input",\n          updateQuoteLinks,\n        );\n      });\n\n      quoteLinks.forEach((link) => {\n        link.addEventListener(\n          "click",\n          updateQuoteLinks,\n        );\n      });`;

const newListeners = `      [\n        countryInput,\n        cityInput,\n        customizationInput,\n      ].forEach((field) => {\n        field?.addEventListener(\n          "input",\n          () => {\n            if (\n              field instanceof HTMLInputElement &&\n              field.value.trim() !== ""\n            ) {\n              field.removeAttribute("aria-invalid");\n            }\n\n            updateQuoteLinks();\n          },\n        );\n      });\n\n      function validateDestination(event) {\n        const requiredFields = [\n          countryInput,\n          cityInput,\n        ].filter(\n          (field) => field instanceof HTMLInputElement,\n        );\n\n        const missingField =\n          requiredFields.find(\n            (field) => field.value.trim() === "",\n          );\n\n        if (!missingField) {\n          requiredFields.forEach((field) =>\n            field.removeAttribute("aria-invalid"),\n          );\n          return true;\n        }\n\n        event.preventDefault();\n        event.stopPropagation();\n        missingField.value = missingField.value.trim();\n        missingField.setAttribute("aria-invalid", "true");\n        missingField.focus();\n        missingField.reportValidity();\n        return false;\n      }\n\n      quoteLinks.forEach((link) => {\n        link.addEventListener(\n          "click",\n          (event) => {\n            updateQuoteLinks();\n            validateDestination(event);\n          },\n        );\n      });`;

if (!source.includes("function validateDestination(event)")) {
  if (!source.includes(oldListeners)) {
    throw new Error("Quote listener marker not found.");
  }
  source = source.replace(oldListeners, newListeners);
}

fs.writeFileSync(file, source, "utf8");
console.log("Required delivery country and city validation enabled.");
