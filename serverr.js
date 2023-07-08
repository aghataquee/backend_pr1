const express=require('express');
const random=require('random');
const PORT=3003;
const app=express();
app.get('/random',(req,res)=>{
    const Randomnum=random.int(1,100);
    res.send(`The RandomNumber generated is ${Randomnum}`);
})
app.listen(PORT,()=>{
    console.log(`The server is running at prt ${PORT}`);
})