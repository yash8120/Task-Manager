const ToDoModel=require("../model/todo.model");
const UserModel=require("../model/user.model");

class ToDoServices{

   static async  createTodo(userId,title,desc,email,status,deadline){
        const createTodo = new ToDoModel({userId,title,desc,email,status,deadline});
        return await createTodo.save();
   }

   static async getTododata(userId){
      const todoData = await ToDoModel.find({userId,"status":false})
      return todoData;
   }
   static async getCompletedTododata(userId){
      const todoData = await ToDoModel.find({userId,"status":true})
      return todoData;
   }
  static async getEmployeeTododata(userId){
      const userData= await UserModel.findById(userId)
      console.log(userData);
      const getemail=userData.email;
      const getdata=await ToDoModel.find({"email":getemail,"status":false})
      return getdata;
  }

  static async getEmpCompletedTododata(userId){
   const userData= await UserModel.findById(userId)
   console.log(userData);
   const getemail=userData.email;
   const getdata=await ToDoModel.find({"email":getemail,"status":true})
   return getdata;
}
  
  

 static async deleteTodo(id){
   const deleted= await ToDoModel.findOneAndDelete({_id:id})
   return deleted;
}
 static async completeTodo(id){
   const complete=await ToDoModel.findOneAndUpdate({_id:id},{"status":true})
   return complete;
 }
}

module.exports=ToDoServices;