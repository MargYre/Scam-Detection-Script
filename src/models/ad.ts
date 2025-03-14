// src/models/ad.ts

import { Ad } from '../types';

export const ad: Ad = {
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