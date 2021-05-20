export * from './mealNote.type';
export * from './dailyNote.type';

export interface Measurement {
    time: string,
    readingNo: string
}

export type Measurements = Array<Measurement>;

export interface Medication {
    time: string,
    medName: string
}

export type Medications = Array<Medication>;