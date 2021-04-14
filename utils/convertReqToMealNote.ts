import { parseDateField, parseNumberField, parseStringField } from ".";
import { MealNoteEntry,EMealType } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isMealType =(param:any): param is EMealType=>{
    return Object.values(EMealType).includes(param);
};

const parseMealType=(mealType:unknown):EMealType=>{
    if(!mealType || !isMealType(mealType)){
        throw new Error(`Incorrect or missing type of meal ${mealType}`);
    }
    return mealType;
};

const parseBGorBP=(value:unknown):string|number|undefined=>{
    if(!value){
        return undefined;
    }
    if(!parseStringField(value,'Blood Glucose or Blood Pressure as string') && !parseNumberField(value,'Blood Glucose or Blood Pressure as number')){
       throw new Error(`Incorrect type of blood glucose or blood pressure - must be string or number`);
    }
   return value as string|number;
};  

const parseNote = (value:unknown): string|undefined=>{
    if(!value){
        return undefined;
    }
    if(!parseStringField(value,'MealNote - note')){
        throw new Error(`Incorrect type of note field ${value}`);
    }
    return value as string;
};

const parseBooleanField =(value:unknown):boolean|undefined=>{
    if(!value){
        return undefined;
    }
    if(value!== true && value!== false){
        throw new Error(`Incorrect type of boolean`);
    }
    return value ;
};

const parseMedNote =(value:unknown):string|undefined=>{
    if(!value){
        return undefined;
    }
    return parseStringField(value,'MealNote - medNote');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertReqToMealNote =(reqBody:any):MealNoteEntry=>{
   const newMealNote ={
        date:parseDateField(reqBody.date,'MealNote - date'),
        username:parseStringField(reqBody.username,'MealNote - username'),
        mealType:parseMealType(reqBody.mealType),  
        skippedMeal:parseBooleanField(reqBody.skippedMeal),
        takenMed:parseBooleanField(reqBody.takenMed),
        medNote:parseMedNote(reqBody.medNote),  
        menuDetails:parseStringField(reqBody.menuDetails,'MealNote - menuDetails'),
        bgBe4Meal:parseBGorBP(reqBody.bgBe4Meal),
        bgAftMeal:parseBGorBP(reqBody.bgAftMeal),
        bpBe4Meal:parseBGorBP(reqBody.bpBe4Meal),
        bpAftMeal:parseBGorBP(reqBody.bpAftMeal),
        note:parseNote(reqBody.note)
   };
   return newMealNote;
};