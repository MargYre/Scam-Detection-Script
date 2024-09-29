// src/index.ts

import { Ad } from './types';
import { ad } from './models/ad';
import { firstnameLengthRule, lastnameLengthRule, alphaRateRule,
          numberRateRule, priceQuotationRateRule, registerNumberBlocklistRule } from './rules';

async function checkRules(ad: Ad) {
    const brokenRules: string[] = [];
  
    if (!firstnameLengthRule(ad.contacts)) {
      brokenRules.push("rule::firstname::length");
    }
    if (!lastnameLengthRule(ad.contacts)) {
      brokenRules.push("rule::lastname::length");
    }
    if (!alphaRateRule(ad.contacts)) {
      brokenRules.push("rule::alpha_rate");
    }
    if (!numberRateRule(ad.contacts)) {
      brokenRules.push("rule::number_rate");
    }
    if (!(await priceQuotationRateRule(ad.vehicle, ad.price))) {
      brokenRules.push("rule::price_quotation_rate");
    }
    if (!(await registerNumberBlocklistRule(ad.vehicle))) {
      brokenRules.push("rule::register_number_blocklist");
    }

    const scam = brokenRules.length > 0;
  
    console.log({
      reference: ad.reference,
      scam,
      rules: brokenRules
    });
}

checkRules(ad).then(() => {
  console.log("Rule check completed successfully.");
}).catch((err) => {
  console.error("Error during rule check:", err);
});