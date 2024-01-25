const express =require('express');
const app =express();
const path = require('path');
const hbs = require('hbs');
const requests = require('requests');
//console.log(__dirname)
const staticpath = path.join(__dirname,'../public')
const templates = path.join(__dirname,'../template/views')
const partialpath = path.join(__dirname,'../template/partials')
//app.use(express.static(staticpath));
//set the template engine
app.set("view engine","hbs");
app.set("views",templates);
hbs.registerPartials(partialpath);
app.get("/about",(req,res)=>{ //top to bottom approch
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=7df34062b23801553372210fcaf711b0`)
    
    .on('data',(chunkdata)=>{
        const objdata =JSON.parse(chunkdata);
        const arry = [objdata];
        console.log(` The city is ${arry[0].name} and temperature is ${arry[0].main.temp}`);
      
        // const realtimeData=arry.map((val)=>replaceval(homeFile,val)).join("");
       // res.write(realtimeData);
       res.write(arry[0].name);
    })

        .on('end',(err)=>{
        if(err){
            return console.log("connection is closed",err);
        }
        res.end();
    })
})
app.get('/',(req,res)=>{
    res.write("<h1>home page</h1>");
    res.write("<h2>single page</h2>");
    res.send();
})
app.get('/contact',(req,res)=>{
    res.send('contact page');
})
app.get('/temp',(req,res)=>{
    // res.send([{
    //     id:1,
    //     name:'dc'  //object ne convert krse 
    // }]);
    res.json([{
        id:1,
        name:'dc'  //non object ne convert karse like null,undefine
    }])
})

app.get("/contact/*",(req,res)=>{
    res.render("errorabout",{
        error:"Opps data is not avilable"
    })
})

app.get("*",(req,res)=>{
    res.render("errorabout",{
        error:"Opps data is not avilable"
    })
})

app.listen(7000,()=>{
    console.log('listining');
})