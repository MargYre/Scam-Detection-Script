// src/rules.ts

import { Contacts, Vehicle } from './types';
import { QuotationService, BlocklistService } from './services';

export const firstnameLengthRule = (contacts: Contacts): boolean => {
    return contacts.firstName.length > 2;
};

export const lastnameLengthRule = (contacts: Contacts): boolean => {
    return contacts.lastName.length > 2;
};

export const alphaRateRule = (contacts: Contacts): boolean => {
    const emailPart = contacts.email.split('@')[0];
    const alphanumericCount = emailPart.replace(/[^a-zA-Z0-9]/g, "").length;
    return (alphanumericCount / emailPart.length) > 0.7;
};

export const numberRateRule = (contacts: Contacts): boolean => {
    const emailPart = contacts.email.split('@')[0];
    const numericCount = emailPart.replace(/[^0-9]/g, "").length;
    return (numericCount / emailPart.length) < 0.3;
  };