const express = require('express');
const app=express();
const hbs = require("hbs");
const path = require('path');
const port=process.env.PORT||5000;
const static_path = path.join(__dirname,"../public/js");
const template = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");
//console.log(path.join(__dirname,"../public"))

app.set("view engine",'hbs');

app.set('views',template);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));
//console.log(__dirname)
app.get("",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather1");
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"Oops data is not available"
    });
})

app.listen(port,()=>{
    console.log("listening");
})
