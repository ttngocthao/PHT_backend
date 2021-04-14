import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import dailyNoteRouter from './routes/dailyNote';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const mongoDBUrl = process.env.DEV_MONGODB ?? '';

if(process.env.NODE_ENV==='dev'){
   mongoose.connect(mongoDBUrl,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(()=>console.log('Connected to MongoDB')).catch(err=>console.log(err));
}

app.get('/',(_req,res)=>{
    res.send('typescript app ts');
});

app.use('/api/dailyNotes',dailyNoteRouter);

const PORT: string|number = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`server is running @ ${PORT}`);
});