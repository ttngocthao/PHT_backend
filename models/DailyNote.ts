import {model,Schema,Document, Types} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const DailyNoteSchema: Schema = new Schema({
    date:{
        type: String,
        required: true,
        unique:true
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
      
    
},{
    toJSON:{
        transform: function(_doc,returnObj){  
            /* eslint-disable @typescript-eslint/no-unsafe-call */
            /* eslint-disable @typescript-eslint/no-unsafe-assignment */           
            returnObj.id = returnObj._id.toString();
            delete returnObj.__v;
            delete returnObj._id;
        }
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
DailyNoteSchema.plugin(uniqueValidator);
const DailyNote = model<IDailyNote>('DailyNote',DailyNoteSchema);

export default DailyNote;

