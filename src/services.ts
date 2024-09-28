// src/services.ts

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

import { Vehicle } from './types';
export async function QuotationService(vehicle: Vehicle): Promise<number> {
    await sleep(50);
    return 35000;
}

export async function BlocklistService(registerNumber: string): Promise<boolean> {
    await sleep(50);
    return registerNumber === "AA123AA";
}