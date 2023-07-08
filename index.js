const express=require('express');
const app=express();
const port=4020;
const hostname='localhost';
app.get('/',(req,res)=>{
    res.send('hello world!')
})
app.listen(port,()=>{
    console.log(`server is ${hostname} ${port}`);
})