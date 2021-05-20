import DailyNote from "../models/DailyNote";
import { DailyNoteEntry } from "../types";


const getAll =async():Promise<void|DailyNoteEntry[]>=>{
    try{
        const result = 
            await  DailyNote.find()
                .populate('breakfast')
                .populate('lunch')
                .populate('dinner');
        return result;
    }catch(error){
        return console.log(error);
    }
};



const getById = async(dailyNoteId:string):Promise<void|DailyNoteEntry|null>=>{
    try {
        const result = await DailyNote.findById(dailyNoteId) .populate('breakfast')
                .populate('lunch')
                .populate('dinner');
        return result;
    } catch (error) {
        return console.log(error);
    }
};

const add = async(reqBody:DailyNoteEntry):Promise<void|DailyNoteEntry>=>{
    
    try {
        //!check if the same user and the same date has been created ?
        const noteExist = await DailyNote.findOne({date: reqBody.date,username: reqBody.username});
        if(noteExist){
            throw new Error('Note exists');
        }
        const newDailyNote = new DailyNote(reqBody);
        const result = await newDailyNote.save();
        
        return result;
    } catch (error) {
        return console.log(error);
    }
};

const update = async(dailyNoteId:string,reqBody:DailyNoteEntry):Promise<void|DailyNoteEntry|null>=>{
    //todo: check if dailyNote exist
    //*: if not throw error
    //*: if exist, update the item
    try {
        const noteExist = await DailyNote.findById(dailyNoteId);
        if(!noteExist){
            throw new Error('Note is not existed');
        }
        const result = await DailyNote.findOneAndUpdate({_id:dailyNoteId},reqBody,{new:true,upsert: true});
        return result;
    } catch (error) {
        return console.log(error);
    }
};


export default {getAll,add,getById,update};


