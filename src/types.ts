// src/types.ts

export interface Contacts {
    firstName: string;
    lastName: string;
    email: string;
    phone1: { value: string };
  }
  
  export interface Vehicle {
    make: string;
    model: string;
    version: string;
    category: string;
    registerNumber: string;
    mileage: number;
  }
  
  export interface Ad {
    contacts: Contacts;
    creationDate: string;
    price: number;
    publicationOptions: string[];
    reference: string;
    vehicle: Vehicle;
  }
  
  export interface ScamReport {
    reference: string;
    scam: boolean;
    rules: string[];
  }