
import DailyNote from '../models/DailyNote';
import MealNote from '../models/MealNote';
import { IMealNote, MealNoteEntry } from '../types';
import {Types} from 'mongoose';



const getAll = async ():Promise<void|MealNoteEntry[]>=>{
   try {
        const result = await MealNote.find({});
        return result;
    } catch (error) {
        return console.log(error);
    }
};

const getById = async(id:string):Promise<void|MealNoteEntry>=>{
    try {
        const mealNote =await MealNote.findById(id);
        if(!mealNote){
            throw new Error('Meal note cannot be found');
        }
        return mealNote;
    } catch (error) {
         return console.log(error);
    }
};

const add = async (reqBody:MealNoteEntry):Promise<void|MealNoteEntry>=>{
    const newMealNote =new MealNote (reqBody);
    try {
        const result = await newMealNote.save();
       
        /**
         *! find the user,find date -> create new if not find
         *! check if the meal type exists
         *! if not, add meal type
         *! if exist, handle error
         */
        let dailyNote = await DailyNote.findOne({username:reqBody.username,date:reqBody.date});
        if(!dailyNote){ 
            //* create new dailyNote
            dailyNote = new DailyNote({
                date: reqBody.date,
                username: reqBody.username
            });
            await dailyNote.save();
        }
        
        switch(newMealNote.mealType){
            case 'Breakfast':
                 dailyNote.breakfast= newMealNote._id as Types.ObjectId;
                 break;
            case 'Lunch':
                dailyNote.lunch = newMealNote._id as Types.ObjectId;
                break;
            case 'Dinner':
                dailyNote.dinner = newMealNote._id as Types.ObjectId;
                break;
            default:
                break;
        }
        //const savedDailyNote = await dailyNote.save();
        //*update dailyNote with mealNote.
        await dailyNote.save();
       // console.log('dailyNote matched',savedDailyNote);
        
        return result;
    } catch (error) {
        return console.log(error);
    }
    
};

const edit = async(mealNoteId:string,reqBody:Partial<MealNoteEntry>):Promise<void|IMealNote|null>=>{
    try {
       const mealNote =  await MealNote.findById(mealNoteId);
       if(!mealNote){
           throw new Error('Meal note cannot be found');
       }
       const updatedMealNote = await MealNote.findByIdAndUpdate(mealNoteId,reqBody,{new:true,upsert: true});
       return updatedMealNote;
    } catch (error) {
        return console.log(error);
    }
};

export default{
    getAll,getById,add,edit
};