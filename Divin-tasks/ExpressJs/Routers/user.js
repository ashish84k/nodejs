const express = require('express');
const { user } = require('../controllers/user');
const { todoList , addTask , DeleteTask ,EditList} = require('../controllers/todoList');

const userRouter = express.Router();


userRouter.get('/user' , user)
userRouter.get('/todo-list' , todoList).post('/add-task',addTask).delete('/delete-task/:id', DeleteTask).put('/update-task' , EditList)


module.exports = userRouter;