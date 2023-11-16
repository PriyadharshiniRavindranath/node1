const express = require("express");
const app = express();
const path = require("path");


app.get("/coffee", (req,res)=>{
    res.sendFile(path.join(__dirname, "coffee.html"));
})

app.get("/starter", (req,res)=>{
    res.sendFile(path.join(__dirname, "starters.html"));
})

app.get("/bakery", (req,res)=>{
    res.sendFile(path.join(__dirname, "bakery.html"));
})

app.listen(7384   ,    ()=>{
    console.log("Server is running");
})
