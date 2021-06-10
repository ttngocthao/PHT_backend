import express from 'express';
// import {
//   format,
//   startOfWeek,
//   addDays,
//   isSameDay,
//   lastDayOfWeek,
//   getWeek,
//   addWeeks,
//   subWeeks
// } from "date-fns";
import mealNoteService from '../services/mealNote';
import { convertReqToMealNote } from '../utils/convertReqToMealNote';
const router = express.Router();

router.get('/',(_req,res)=>{
    
    mealNoteService.getAll()
        .then(result=>res.status(200).json(result))
        .catch(error=>console.log(error));

});

// router.get('/weekly',(_req,res)=>{
//    const query = _req.query;//from=Mon17May21&to=Sun23May21
//     const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
//     const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
     
// });

router.get('/:id',(_req,res)=>{
    mealNoteService.getById(_req.params.id)
        .then(result=>res.status(200).json(result))
        .catch(error=> console.log(error));
});

router.post('/',(_req,res)=>{
    //!convert _req.body to the proper type before sending
    const newMealNote = convertReqToMealNote(_req.body);
    mealNoteService.add(newMealNote)
        .then(result=>res.status(200).json(result))
        .catch(error=>console.log(error));
    
});

router.post('/:id',(_req,res)=>{
    const mealNoteId = _req.params.id;
    mealNoteService.edit(mealNoteId,_req.body)
    .then(result=>res.status(200).json(result))
    .catch(error =>console.log(error));
});


router.delete('/:id',(_req,res)=>{
    const mealNoteId = _req.params.id;
    mealNoteService.remove(mealNoteId)
        .then(result=>res.status(200).json(result))
        .catch(error=>console.log(error));
});

export default router;