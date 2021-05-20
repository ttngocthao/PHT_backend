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
}, {
    toJSON: {
        transform: function (_doc, returnObj) {
            /* eslint-disable @typescript-eslint/no-unsafe-call */
            /* eslint-disable @typescript-eslint/no-unsafe-assignment */
            returnObj.id = returnObj._id.toString();
            delete returnObj.__v;
            delete returnObj._id;
        }
    }
});
const MealNote = mongoose_1.model('MealNote', MealNoteSchema);
exports.default = MealNote;
