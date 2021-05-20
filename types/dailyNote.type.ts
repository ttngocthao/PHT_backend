import {Measurements, Medications} from '../types';

export interface DailyNoteEntry{
    date:string;
    username:string;
    fastingHours?:string;
    sleepingHours?:string;
    dailyNote?:string;
    note?:string;
    bloodPressure?:Measurements,
    bloodGlucose?:Measurements,
    medication?:Medications,
    activities?:string,
    beverages?: string
}

