const express=require('express');
const app=express();
const PORT=4001;
app.get('/',(req,res)=>{
    res.send("At Home page");
})
app.get('/about',(req,res)=>{
    res.send(" I am About Page");
})
app.get('/contact',(req,res)=>{
    res.send("pwskillsapp");
})
app.listen(PORT,()=>{
    console.log(`The server is running at port ${PORT}`);
})