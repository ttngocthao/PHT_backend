"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DailyNote_1 = __importDefault(require("../models/DailyNote"));
const MealNote_1 = __importDefault(require("../models/MealNote"));
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield MealNote_1.default.find({});
        return result;
    }
    catch (error) {
        return console.log(error);
    }
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mealNote = yield MealNote_1.default.findById(id);
        if (!mealNote) {
            throw new Error('Meal note cannot be found');
        }
        return mealNote;
    }
    catch (error) {
        return console.log(error);
    }
});
const add = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const newMealNote = new MealNote_1.default(reqBody);
    try {
        const result = yield newMealNote.save();
        /**
         *! find the user,find date -> create new if not find
         *! check if the meal type exists
         *! if not, add meal type
         *! if exist, handle error
         */
        let dailyNote = yield DailyNote_1.default.findOne({ username: reqBody.username, date: reqBody.date });
        if (!dailyNote) {
            //* create new dailyNote
            dailyNote = new DailyNote_1.default({
                date: reqBody.date,
                username: reqBody.username
            });
            yield dailyNote.save();
        }
        switch (newMealNote.mealType) {
            case 'Breakfast':
                dailyNote.breakfast = newMealNote._id;
                break;
            case 'Lunch':
                dailyNote.lunch = newMealNote._id;
                break;
            case 'Dinner':
                dailyNote.dinner = newMealNote._id;
                break;
            default:
                break;
        }
        //const savedDailyNote = await dailyNote.save();
        //*update dailyNote with mealNote.
        yield dailyNote.save();
        // console.log('dailyNote matched',savedDailyNote);
        return result;
    }
    catch (error) {
        return console.log(error);
    }
});
exports.default = {
    getAll, getById, add
};
