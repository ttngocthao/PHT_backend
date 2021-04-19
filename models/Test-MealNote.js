const mongoose = require('mongoose')

const MealNoteSchema = mongoose.Schema({
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
module.exports = mongoose.model('MealNote',MealNoteSchema);