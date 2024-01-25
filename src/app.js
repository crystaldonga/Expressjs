const express = require('express');
const app=express();
app.get('/',(req,res)=>{
          res.send("home page");
})

app.get('/about',(req,res)=>{
    res.send('about page');
})


app.listen(7000,()=>{
    console.log('listing');
})