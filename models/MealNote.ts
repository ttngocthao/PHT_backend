import {model,Schema} from 'mongoose';
import {IMealNote} from '../types/index';

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



const MealNote = model<IMealNote>('MealNote',MealNoteSchema);

export default MealNote;
