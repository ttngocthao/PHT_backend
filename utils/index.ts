
const isNumber =(value: unknown):value is number=>{
    return typeof value ==='number';
};

const isString =(str:unknown): str is string =>{
    return typeof str === 'string' || str instanceof String;
};

const isDate =(date:string):boolean =>{
    return Boolean(Date.parse(date));
};

export const isArray =(value:unknown): boolean=>{
    return Array.isArray(value);
};

export const parseDateField =(value:unknown,field:string):string=>{
    if(!value || !isString(value) || !isDate(value)){
        throw new Error(`Incorrect or missing ${field}`);
    }
    return value;
};

export const parseStringField = (value:unknown,field:string):string =>{
    if(!value || !isString(value)){
        throw new Error(`Incorrect or missing ${field}`);
    }
    return value;
};

export const parseNumberField =(value:unknown,field:string):number=>{
    if(value===undefined || !isNumber(value) ){
        throw new Error(`Incorrect or missing ${field}`);
    }
    return value;
};

// export const parseBooleanField =(value:unknown,field:string):boolean=>{   
//     if(value!== true && value!== false){
//         throw new Error(`Incorrect type of boolean ${field}`);
//     }
//     return value ;
// };