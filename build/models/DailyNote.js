"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const DailyNoteSchema = new mongoose_1.Schema({
    date: {
        type: String,
        required: true,
        unique: true
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
    bloodPressure: [{
            time: String,
            readingNo: String
        }],
    bloodGlucose: [{
            time: String,
            readingNo: String
        }],
    medication: [{
            time: String,
            medName: String
        }],
    activities: {
        type: String
    },
    beverages: {
        type: String
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
DailyNoteSchema.plugin(mongoose_unique_validator_1.default);
const DailyNote = mongoose_1.model('DailyNote', DailyNoteSchema);
exports.default = DailyNote;
