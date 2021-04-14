import {model,Schema,Document} from 'mongoose';
import {IMealNote} from '../models/MealNote';


const DailyNoteSchema: Schema = new Schema({
    testing: {
        type: Boolean,
        default: true
    },
    date:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    fastingHours:{
        type: String,
    },
    sleepingHours:{
        type: String,      
    },
    note: {
        type: String,      
    },
    meals:{
       breakfast: {
           type: Schema.Types.ObjectId
       },
       lunch: {
           type: Schema.Types.ObjectId
       }
    }
});
interface IMeals extends Document{
    breakfast: IMealNote;
    lunch: IMealNote;
    dinner: IMealNote
}
interface IDailyNote extends Document{
    date:string;
    username:string;
    fastingHours:string;
    sleepingHours:string;
    dailyNote:string;
    meals:IMeals
    }

const DailyNote = model<IDailyNote>('DailyNote',DailyNoteSchema);

export default DailyNote;

