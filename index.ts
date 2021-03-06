import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import dailyNoteRouter from './routes/dailyNote';
import mealNoteRouter from './routes/mealNote';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const mongoDBUrl = (process.env.NODE_ENV==='dev' ? process.env.DEV_MONGODB : process.env.NODE_ENV==='production'? process.env.PROD_MONGODB:'') ?? '';


mongoose.connect(mongoDBUrl,
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
})
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.log(err));



app.get('/',(_req,res)=>{
    res.send('personal health tracker');
});

app.use('/api/dailyNotes',dailyNoteRouter);
app.use('/api/mealNotes',mealNoteRouter);

const PORT: string|number = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`server is running @ ${PORT}`);
});