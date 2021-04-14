import express from 'express';
import DailyNote from '../models/DailyNote';

const router = express.Router();

router.get('/',(_req,res)=>{
  DailyNote.find({}).then(result=>res.status(200).json(result)).catch(err=>console.log(err));
  //res.send('get all daily notes');
});

router.post('/',(_req,res)=>{
   
    const newDailyNote = new DailyNote({
        date:'Wed 14 Apr 21',
        username:'paul',
        fastingHours:0,
        sleepingHours:6,
        note: 'Did not feel well yesterday after swimming exercise',
    });
     newDailyNote.save().then(result=>res.status(201).json(result)).catch(err=>console.log(err));
   
});

export default router;