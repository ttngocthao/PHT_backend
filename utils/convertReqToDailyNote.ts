import { parseDateField, parseStringField } from ".";
import { DailyNoteEntry } from "../types";


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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertReqToDailyNote =(reqBody:any):DailyNoteEntry=>{

    const newDailyNote={
        date: parseDateField(reqBody.date,'dailyNote - date'),
        username: parseStringField(reqBody.username,'dailyNote - username'),
        fastingHours: parseFastingHours(reqBody.fastingHours),
        sleepingHours: parseSleepingHours(reqBody.sleepingHours),
        note: parseNote(reqBody.note)
    };

    return newDailyNote;
};