"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MealNoteSchema = new mongoose_1.Schema({
    date: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    mealType: {
        type: String,
        require: true
    },
    skippedMeal: {
        type: Boolean,
        defaultStatus: false
    },
    takenMed: {
        type: Boolean,
        defaultStatus: false
    },
    medNote: {
        type: String
    },
    menuDetails: {
        type: String
    },
    bgBe4Meal: {
        type: String
    },
    bgAftMeal: {
        type: String
    },
    bpBe4Meal: {
        type: String
    },
    bpAftMeal: {
        type: String
    },
    note: {
        type: String
    }
});
const MealNote = mongoose_1.model('MealNote', MealNoteSchema);
exports.default = MealNote;
