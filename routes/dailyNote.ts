import express from 'express';

import dailyNoteService from '../services/dailyNote';
import { convertReqToDailyNote } from '../utils/convertReqToDailyNote';


const router = express.Router();

router.get('/',(_req,res)=>{
  //const currentUser ='mum';//!for future if there are more than a users
  dailyNoteService.getAll()
        .then(result=>res.status(200).json(result))
        .catch(error=>console.log(error));
});

router.get('/:id',(_req,res)=>{
  dailyNoteService.getById(_req.params.id)
    .then(result=>res.status(200).json(result))
    .catch(error => console.log(error));
    
});

router.post('/',(_req,res)=>{
  //todo: convert _req.body to the proper type before sending
    const newDailyNote = convertReqToDailyNote(_req.body); 
    dailyNoteService.add(newDailyNote)
      .then(result=>res.status(201).json(result))
      .catch(err=>console.log(err));   
});

router.post('/:id',(_req,res)=>{
  const noteId = _req.params.id;
  dailyNoteService.update(noteId,_req.body).then(result=>res.status(200).json(result)).catch(err=>console.log(err));
});

router.delete('/:id',(_req,res)=>{
  const noteId = _req.params.id;
  dailyNoteService.remove(noteId)
    .then(result=> res.status(200).json(result))
    .catch(error=> {
      console.log(error);
      });
});

export default router;