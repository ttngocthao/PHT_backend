import express from 'express';

const app = express();

app.get('/',(_req,res)=>{
    res.json('Hello pht typescript app');
});

const PORT: string|number = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running @ ${PORT}`);
});