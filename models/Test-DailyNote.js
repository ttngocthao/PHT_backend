const mongoose=  require('mongoose');

const DailyNoteSchema= new mongoose.Schema({
    date:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    fastingHours:{
        type: Number,
        default:0
    },
    sleepingHours:{
        type: Number,   
        default:0   
    },
    note: {
        type: String,      
    },
    // meals:{
    //    breakfast: {
    //        type: mongoose.Schema.Types.ObjectId,
    //        ref:'MealNote'
    //    },
    //    lunch: {
    //        type: Schema.Types.ObjectId,
    //        ref:'MealNote'
    //    },
    //    dinner:{
    //        type: Schema.Types.ObjectId,
    //        ref:'MealNote'
    //    }
    // }
    meals:{
        type: Object,
        default:{}
    }
});

module.exports = mongoose.model('DailyNote',DailyNoteSchema)

