
import MealNote from '../models/MealNote';
import { IMealNote } from '../types';


const getAll = async ()=>{
   try {
        const result = await MealNote.find({});
        return result;
    } catch (error) {
        return console.log(error);
    }
};

const add = async (reqBody:IMealNote):Promise<void|IMealNote>=>{
    const newMealNote =new MealNote (reqBody);
    try {
        const result = await newMealNote.save();
        return result;
    } catch (error) {
        return console.log(error);
    }
    
};

export default{
    getAll,add
};