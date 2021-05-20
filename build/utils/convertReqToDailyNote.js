"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertReqToDailyNote = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
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
const parseUnrequiredStringField = (value, field) => {
    if (!value) {
        return undefined;
    }
    return _1.parseStringField(value, field);
};
const isArray = (value) => {
    return Array.isArray(value);
};
const parseMedication = (value) => {
    if (!value) {
        return undefined;
    }
    if (!isArray(value)) {
        throw new Error('Medication name and time are required');
    }
    return value; //! need to define an array of medication type somewhere
};
const parseMeasurements = (value) => {
    if (!value) {
        return undefined;
    }
    if (!isArray(value)) {
        throw new Error('Measurement requires reading number and time');
    }
    return value; //! need to define an array of measurement type somewhere
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertReqToDailyNote = (reqBody) => {
    const newDailyNote = {
        date: _1.parseDateField(reqBody.date, 'dailyNote - date'),
        username: _1.parseStringField(reqBody.username, 'dailyNote - username'),
        fastingHours: parseFastingHours(reqBody.fastingHours),
        sleepingHours: parseSleepingHours(reqBody.sleepingHours),
        activities: parseUnrequiredStringField(reqBody.activities, 'dailyNote- activities'),
        beverages: parseUnrequiredStringField(reqBody.beverages, 'dailyNote - beverages'),
        bloodGlucose: parseMeasurements(reqBody.bloodGlucose),
        bloodPressure: parseMeasurements(reqBody.bloodPressure),
        medication: parseMedication(reqBody.medication),
        note: parseNote(reqBody.note)
    };
    return newDailyNote;
};
exports.convertReqToDailyNote = convertReqToDailyNote;
