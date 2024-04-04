const router=require('express').Router();
const TodoController=require("../controller/todo.controller");
const {requireauth}=require("../middleware/authMiddleware")
router.post('/storeTodo',TodoController.createTodo);

router.get('/getUserTodoList/:id',TodoController.getUserTodo);

router.get('/deleteTodo/:id',TodoController.deleteTodo);

router.get('/completeTodo/:id',TodoController.completeTodo);

router.get('/getEmployeeTodo/:id',TodoController.getEmployeeTodo);

router.get('/getEmpCompletedTodo/:id',TodoController.getEmpCompletedTodo);

router.get('/getCompletedTodo/:id',TodoController.getCompletedTodo);

module.exports=router;