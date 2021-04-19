"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumberField = exports.parseStringField = exports.parseDateField = exports.isArray = void 0;
const isNumber = (value) => {
    return typeof value === 'number';
};
const isString = (str) => {
    return typeof str === 'string' || str instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isArray = (value) => {
    return Array.isArray(value);
};
exports.isArray = isArray;
const parseDateField = (value, field) => {
    if (!value || !isString(value) || !isDate(value)) {
        throw new Error(`Incorrect or missing ${field}`);
    }
    return value;
};
exports.parseDateField = parseDateField;
const parseStringField = (value, field) => {
    if (!value || !isString(value)) {
        throw new Error(`Incorrect or missing ${field}`);
    }
    return value;
};
exports.parseStringField = parseStringField;
const parseNumberField = (value, field) => {
    if (value === undefined || !isNumber(value)) {
        throw new Error(`Incorrect or missing ${field}`);
    }
    return value;
};
exports.parseNumberField = parseNumberField;
// export const parseBooleanField =(value:unknown,field:string):boolean=>{   
//     if(value!== true && value!== false){
//         throw new Error(`Incorrect type of boolean ${field}`);
//     }
//     return value ;
// };
