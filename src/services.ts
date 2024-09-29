// src/services.ts

import { Vehicle } from './types';
import { sleep } from './utils/sleep';

export async function QuotationService(vehicle: Vehicle): Promise<number> {
    await sleep(50);
    return 35000;
}

export async function BlocklistService(registerNumber: string): Promise<boolean> {
    await sleep(50);
    return registerNumber === "AA123AA";
}