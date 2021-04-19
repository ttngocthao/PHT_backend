import express from 'express';

import mealNoteService from '../services/mealNote';
import { convertReqToMealNote } from '../utils/convertReqToMealNote';
const router = express.Router();

router.get('/',(_req,res)=>{
    mealNoteService.getAll()
        .then(result=>res.status(200).json(result))
        .catch(error=>console.log(error));

});

router.get('/:id',(_req,res)=>{
    mealNoteService.getById(_req.params.id)
        .then(result=>res.status(200).json(result))
        .catch(error=> console.log(error));
});

router.post('/',(_req,res)=>{
    //!convert _req.body to the proper type before sending
    const newMealNote = convertReqToMealNote(_req.body);
    mealNoteService.add(newMealNote).then(result=>res.status(200).json(result)).catch(error=>console.log(error));
    
});



export default router;