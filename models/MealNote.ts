import {model,Schema,Document} from 'mongoose';

enum EMealType {
    Breakfast='Breakfast',
    Lunch = 'Lunch',
    Dinner = 'Dinner'
}

const MealNoteSchema: Schema = new Schema({
    date:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    mealType:{
        type: String,
        require: true
    },
    skippedMeal:{
        type: Boolean,
        defaultStatus: false
    },
    takenMed:{
        type: Boolean,
        defaultStatus: false
    },
    medNote:{
        type: String
    },
    menuDetails:{
        type: String
    },
    bgBe4Meal:{
        type: String
    },
    bgAftMeal:{
        type: String
    },
    bpBe4Meal:{
        type: String
    },
    bpAftMeal:{
        type: String
    },
    note:{
        type: String
    }
});

export interface IMealNote extends Document{
    date:string,
    username:string,
    mealType: EMealType,
    skippedMeal:boolean,
    takenMed:boolean,
    medNote?:string,
    menuDetails?: string,
    bgBe4Meal?:string,
    bgAftMeal?:string,
    bpBe4Meal?:string
    bpAftMeal?:string
    note?:string
}

const MealNote = model<IMealNote>('MealNote',MealNoteSchema);

export default MealNote;
