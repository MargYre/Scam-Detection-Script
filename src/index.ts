// src/index.ts

import { Ad } from './types';
import { firstnameLengthRule, lastnameLengthRule } from './rules';

// Définition d'une annonce fictive
const ad: Ad = {
    contacts: {
      firstName: "Jo",
      lastName: "D",
      email: "jo.d@test.com",
      phone1: { value: "0607080901" }
    },
    creationDate: "2020-01-09T09:02:22.610Z",
    price: 19000,
    publicationOptions: ["STRENGTHS", "BOOST_VO"],
    reference: "B300053623",
    vehicle: {
      make: "HONDA",
      model: "CR-V",
      version: "IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT",
      category: "SUV_4X4_CROSSOVER",
      registerNumber: "AA123AA",
      mileage: 100000
    }
  };


function checkRules(ad: Ad) {
    const brokenRules: string[] = [];
  
    if (!firstnameLengthRule(ad.contacts)) {
      brokenRules.push("rule::firstname::length");
    }
  
    if (!lastnameLengthRule(ad.contacts)) {
      brokenRules.push("rule::lastname::length");
    }
  
    const scam = brokenRules.length > 0;
  
    console.log({
      reference: ad.reference,
      scam,
      rules: brokenRules
    });
  }
  
checkRules(ad);