const mongoose=require('mongoose');
require('dotenv').config();
const url=process.env.dbURL;

const connection=mongoose.createConnection(url).on('open',()=>{
    console.log("MongoDB connected");
    }).on('error',()=>{
        console.log("MongoDB connection error");
});

module.exports=connection;