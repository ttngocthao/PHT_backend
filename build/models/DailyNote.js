"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DailyNoteSchema = new mongoose_1.Schema({
    date: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    fastingHours: {
        type: String,
    },
    sleepingHours: {
        type: String,
    },
    note: {
        type: String,
    },
    breakfast: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'MealNote'
    },
    lunch: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'MealNote'
    },
    dinner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'MealNote'
    }
});
const DailyNote = mongoose_1.model('DailyNote', DailyNoteSchema);
exports.default = DailyNote;
