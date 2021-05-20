/* eslint-disable @typescript-eslint/no-explicit-any */
import { parseDateField, parseStringField } from ".";
import { DailyNoteEntry, Measurements, Medications } from "../types";


const parseFastingHours =(value:unknown):string|undefined=>{
    if(!value){
        return undefined;
    }
    return parseStringField(value,'dailyNote - fasting hours');
};

const parseSleepingHours = (value:unknown):string|undefined=>{
    if(!value){
        return undefined;
    }
    return parseStringField(value,'dailyNote - sleeping hours');
};

const parseNote = (value:unknown):string|undefined=>{
    if(!value){
        return undefined;
    }
    return parseStringField(value,'dailyNote - note');
};
const parseUnrequiredStringField = (value:unknown,field:string):string|undefined=>{
    if(!value){
        return undefined;
    }
    return parseStringField(value,field);
};


const isArray =(value:unknown): boolean=>{
    return Array.isArray(value);
};
const parseMedication = (value:any): Medications| undefined=>{
    if(!value){
        return undefined;
    }
    if(!isArray(value)){
        throw new Error('Medication name and time are required');
    }
   
    return value as Medications;//! need to define an array of medication type somewhere
};
const parseMeasurements = (value:any): Measurements | undefined =>{
    if(!value){
        return undefined;
    }
    if(!isArray(value)){
        throw new Error('Measurement requires reading number and time');
    }
    return value as Measurements;//! need to define an array of measurement type somewhere
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertReqToDailyNote =(reqBody:any):DailyNoteEntry=>{

    const newDailyNote={
        date: parseDateField(reqBody.date,'dailyNote - date'),
        username: parseStringField(reqBody.username,'dailyNote - username'),
        fastingHours: parseFastingHours(reqBody.fastingHours),
        sleepingHours: parseSleepingHours(reqBody.sleepingHours),
        activities: parseUnrequiredStringField(reqBody.activities,'dailyNote- activities'),
        beverages: parseUnrequiredStringField(reqBody.beverages,'dailyNote - beverages'),
        bloodGlucose:parseMeasurements(reqBody.bloodGlucose),
        bloodPressure:parseMeasurements(reqBody.bloodPressure),
        medication:parseMedication(reqBody.medication),
        note: parseNote(reqBody.note)
    };

    return newDailyNote;
};