const express = require("express");

const app = express();


app.get("/contact",(req,res)=>{
    res.send("hello world !!!")
})

app.get("/",(req,res)=>{
    res.send("welcome !!!")
})

app.listen(4000,(req,res)=>{
    console.log("connect server success");
})