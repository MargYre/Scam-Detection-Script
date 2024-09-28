// src/rules.ts

import { Contacts, Vehicle } from './types';
import { QuotationService, BlocklistService } from './services';

export const firstnameLengthRule = (contacts: Contacts): boolean => {
    return contacts.firstName.length > 2;
};

export const lastnameLengthRule = (contacts: Contacts): boolean => {
    return contacts.lastName.length > 2;
};