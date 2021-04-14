import express from 'express';

import mealNoteService from '../services/mealNote';
import { convertReqToMealNote } from '../utils/convertReqToMealNote';
const router = express.Router();

router.get('/',(_req,res)=>{

    mealNoteService.getAll().then(result=>res.status(200).json(result)).catch(error=>console.log(error));

});

router.post('/',(_req,res)=>{
    //!convert _req.body to the proper type before sending
    const newMealNote = convertReqToMealNote(_req.body);
    mealNoteService.add(newMealNote).then(result=>res.status(200).json(result)).catch(error=>console.log(error));
    // const newMealNote =new MealNote ({
    //     date:'Wed 14 Apr 21',
    //     username:'thao',
    //     mealType:'dinner',    
    //     menuDetails:'1 eggs,225g rump steak, a small avocado, lettuce, red pepper,150g steamed potato',
    //     bgBe4Meal:'normal',
    //     bgAftMeal:'normal',
    //     bpBe4Meal:'normal',
    //     bpAftMeal:'normal',
    //     note:'Steak and egg, my favorite forever'
    // }); 

});

export default router;