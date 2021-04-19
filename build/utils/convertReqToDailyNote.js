"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertReqToDailyNote = void 0;
const _1 = require(".");
const parseFastingHours = (value) => {
    if (!value) {
        return undefined;
    }
    return _1.parseStringField(value, 'dailyNote - fasting hours');
};
const parseSleepingHours = (value) => {
    if (!value) {
        return undefined;
    }
    return _1.parseStringField(value, 'dailyNote - sleeping hours');
};
const parseNote = (value) => {
    if (!value) {
        return undefined;
    }
    return _1.parseStringField(value, 'dailyNote - note');
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertReqToDailyNote = (reqBody) => {
    const newDailyNote = {
        date: _1.parseDateField(reqBody.date, 'dailyNote - date'),
        username: _1.parseStringField(reqBody.username, 'dailyNote - username'),
        fastingHours: parseFastingHours(reqBody.fastingHours),
        sleepingHours: parseSleepingHours(reqBody.sleepingHours),
        note: parseNote(reqBody.note)
    };
    return newDailyNote;
};
exports.convertReqToDailyNote = convertReqToDailyNote;
