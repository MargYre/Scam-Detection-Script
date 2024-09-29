// src/index.ts

import { Ad } from './types';
import { ad } from './models/ad';
import { firstnameLengthRule, lastnameLengthRule, alphaRateRule,
          numberRateRule } from './rules';

function checkRules(ad: Ad) {
    const brokenRules: string[] = [];
  
    if (!firstnameLengthRule(ad.contacts)) {
      brokenRules.push("rule::firstname::length");
    }
    if (!lastnameLengthRule(ad.contacts)) {
      brokenRules.push("rule::lastname::length");
    }
    if (!alphaRateRule(ad.contacts)) {
      brokenRules.push("rule::alphaRate");
    }
    if (!numberRateRule(ad.contacts)) {
      brokenRules.push("rule::numberRate");
    }
  
    const scam = brokenRules.length > 0;
  
    console.log({
      reference: ad.reference,
      scam,
      rules: brokenRules
    });
  }
  
checkRules(ad);