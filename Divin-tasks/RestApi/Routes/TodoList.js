const express = require("express");
const { TodoLists } = require("../Models/TodoList");
const {
  AddTodo,
  DeleteTodo,
  GetAllTodo,
  GetTodoById,
  UpdateTodo,
} = require("../Controllers/TodoList");

const TodoRoutes = express.Router();

TodoRoutes.get("/api/todo-list", GetAllTodo);

TodoRoutes.post("/api/todo-list", AddTodo);

TodoRoutes.route("/api/todo-list/:id")
  .get(GetTodoById)
  .delete(DeleteTodo)
  .patch(UpdateTodo);

module.exports = { TodoRoutes };
