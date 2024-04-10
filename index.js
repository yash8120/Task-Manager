const app=require('./app');
const db=require('./config/db')
const UserModel=require('./model/user.model')
const TodoModel=require('./model/todo.model')
require('dotenv').config();

//const port=process.env.PORT;
const port=8000;
app.get('/',(req,res)=>{
    res.send("hello world")
});
app.listen(port,()=>
{
    console.log(`Server Listening on Port http://localhost:${port}`);
});
module.exports=app
