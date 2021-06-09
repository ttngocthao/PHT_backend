"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const types_1 = require("../types");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isMealType = (param) => {
    return Object.values(types_1.EMealType).includes(param);
};
const parseMealType = (mealType) => {
    if (!mealType || !isMealType(mealType)) {
        throw new Error(`Incorrect or missing type of meal ${mealType}`);
    }
    return mealType;
};
const parseBGorBP = (value) => {
    if (!value) {
        return undefined;
    }
    if (!_1.parseStringField(value, 'Blood Glucose or Blood Pressure as string') && !_1.parseNumberField(value, 'Blood Glucose or Blood Pressure as number')) {
        throw new Error(`Incorrect type of blood glucose or blood pressure - must be string or number`);
    }
    return value;
};
const parseNote = (value) => {
    if (!value) {
        return undefined;
    }
    if (!_1.parseStringField(value, 'MealNote - note')) {
        throw new Error(`Incorrect type of note field ${value}`);
    }
    return value;
};
const parseBooleanField = (value) => {
    if (!value) {
        return undefined;
    }
    if (value !== true && value !== false) {
        throw new Error(`Incorrect type of boolean`);
    }
    return value;
};
const parseMedNote = (value) => {
    if (!value) {
        return undefined;
    }
    return _1.parseStringField(value, 'MealNote - medNote');
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.convertReqToMealNote = (reqBody) => {
    const newMealNote = {
        date: _1.parseDateField(reqBody.date, 'MealNote - date'),
        username: _1.parseStringField(reqBody.username, 'MealNote - username'),
        mealType: parseMealType(reqBody.mealType),
        skippedMeal: parseBooleanField(reqBody.skippedMeal),
        takenMed: parseBooleanField(reqBody.takenMed),
        medNote: parseMedNote(reqBody.medNote),
        menuDetails: _1.parseStringField(reqBody.menuDetails, 'MealNote - menuDetails'),
        bgBe4Meal: parseBGorBP(reqBody.bgBe4Meal),
        bgAftMeal: parseBGorBP(reqBody.bgAftMeal),
        bpBe4Meal: parseBGorBP(reqBody.bpBe4Meal),
        bpAftMeal: parseBGorBP(reqBody.bpAftMeal),
        note: parseNote(reqBody.note)
    };
    return newMealNote;
};
