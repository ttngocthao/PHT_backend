import {Document} from 'mongoose';

export enum EMealType {
    Breakfast='Breakfast',
    Lunch = 'Lunch',
    Dinner = 'Dinner'
}

export interface MealNoteEntry   {
    date:string,
    username:string,
    mealType: EMealType,
    skippedMeal?:boolean,
    takenMed?:boolean,
    medNote?:string,
    menuDetails?: string,
    bgBe4Meal?:string|number,
    bgAftMeal?:string|number,
    bpBe4Meal?:string|number,
    bpAftMeal?:string|number,
    note?:string
}
//this only can be used for creating schema
export interface IMealNote extends Document{
    date:string,
    username:string,
    mealType: EMealType,
    skippedMeal?:boolean,
    takenMed?:boolean,
    medNote?:string,
    menuDetails?: string,
    bgBe4Meal?:string|number,
    bgAftMeal?:string|number,
    bpBe4Meal?:string|number,
    bpAftMeal?:string|number,
    note?:string
}

