const express = require("express");
const app=express();
const dotenv=require('dotenv');
const connectDB  = require('./config/db');
const colors = require('colors')
const AuthRoute=require('./routes/createUser')
dotenv.config();
connectDB();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-requested-With,Content-Type,Accept"
    );
    next();
})

app.use(express.json());
app.use('/api',AuthRoute);

app.listen(process.env.Port||5000,(req,res)=>{
console.log(colors.rainbow("Server is running at port 5000"));
});