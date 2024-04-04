const db=require('../config/db');
const mongoose=require('mongoose');
const UserModel=require("../model/user.model")
const { Schema }=mongoose;

const todoSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    deadline:{
        type:Date,
        required:true
    }
});

const ToDoModel=db.model('todo',todoSchema);

module.exports=ToDoModel;