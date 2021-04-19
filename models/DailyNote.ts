import {model,Schema,Document, Types} from 'mongoose';



const DailyNoteSchema: Schema = new Schema({
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
    breakfast: {
        type: Schema.Types.ObjectId,
        ref:'MealNote'
    },
    lunch: {
        type: Schema.Types.ObjectId,
        ref:'MealNote'
    },
    dinner:{
        type: Schema.Types.ObjectId,
        ref:'MealNote'
    }
      
    
});



interface IDailyNote extends Document{
    date:string;
    username:string;
    fastingHours:string;
    sleepingHours:string;
    dailyNote:string;
    breakfast: Types.ObjectId;
    lunch: Types.ObjectId;
    dinner: Types.ObjectId;
}

const DailyNote = model<IDailyNote>('DailyNote',DailyNoteSchema);

export default DailyNote;

