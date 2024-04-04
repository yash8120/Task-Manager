const ToDoServices=require("../services/todo.services");

exports.createTodo= async (req,res,next)=>{
    try{
        const {userId,title,desc,email,status,deadline}=req.body;

        let todo=await ToDoServices.createTodo(userId,title,desc,email,status,deadline);
        
        res.json({status:true,success:todo});
    }catch(error){
        next(error);
    }
}

exports.getUserTodo= async (req,res,next)=>{
    try{
       
        const userId=req.params.id;
        console.log({userId});
        let todo=await ToDoServices.getTododata(userId);

        res.json({status:true,success:todo});
    }catch(error){
        next(error);
    }
}
exports.getCompletedTodo=async (req,res,next)=>{
    try{
        const userId=req.params.id;
        console.log({userId});
        let todo=await ToDoServices.getCompletedTododata(userId);

        res.json({status:true,success:todo});
    }catch(error){
        next(error);
    }
}

exports.getEmployeeTodo =async (req,res,next)=>{
    try{
        const userId=req.params.id;
        console.log({userId});
        let todo=await ToDoServices.getEmployeeTododata(userId);

        res.json({status:true,success:todo});
    }catch(error){
        next(error);
    }
}

exports.getEmpCompletedTodo =async (req,res,next)=>{
    try{
        const userId=req.params.id;
        console.log({userId});
        let todo=await ToDoServices.getEmpCompletedTododata(userId);

        res.json({status:true,success:todo});
    }catch(error){
        next(error);
    }
}

exports.deleteTodo= async (req,res,next)=>{
    try{
        const id=req.params.id;

        let deleted=await ToDoServices.deleteTodo(id);

        res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}

exports.completeTodo =async (req,res,next)=>{
    try{
        const id=req.params.id;

        let complete=await ToDoServices.completeTodo(id);

        res.json({status:true,success:complete});
    }catch(error){
        next(error);
    }
}