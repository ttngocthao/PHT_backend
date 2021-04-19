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
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield DailyNote_1.default.find()
            .populate('breakfast')
            .populate('lunch')
            .populate('dinner');
        return result;
    }
    catch (error) {
        return console.log(error);
    }
});
const getById = (dailyNoteId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield DailyNote_1.default.findById(dailyNoteId).populate('breakfast')
            .populate('lunch')
            .populate('dinner');
        return result;
    }
    catch (error) {
        return console.log(error);
    }
});
const add = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //!check if the same user and the same date has been created ?
        const noteExist = yield DailyNote_1.default.findOne({ date: reqBody.date, username: reqBody.username });
        if (noteExist) {
            throw new Error('Note exists');
        }
        const newDailyNote = new DailyNote_1.default(reqBody);
        const result = yield newDailyNote.save();
        return result;
    }
    catch (error) {
        return console.log(error);
    }
});
// const update = async(DailyNoteId:string):Promise<void|DailyNoteEntry|null>=>{
//     //todo: check if dailyNote exist
//     //*: if not throw error
//     //*: if exist, update the item
//     try {
//     } catch (error) {
//     }
// }
exports.default = { getAll, add, getById };
