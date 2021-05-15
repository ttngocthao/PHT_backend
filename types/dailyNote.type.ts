import {Measurement, Medication} from '../types';

export interface DailyNoteEntry{
    date:string;
    username:string;
    fastingHours?:string;
    sleepingHours?:string;
    dailyNote?:string;
    note?:string;
    bloodPressure?:Measurement[],
    bloodGlucose?:Measurement[],
    medication?:Medication[],
    activities?:string,
    beverages?: string
}

