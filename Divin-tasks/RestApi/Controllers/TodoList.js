
const { TodoLists } = require("../Models/TodoList");


const GetAllTodo = async (req, res) => {
  try {
    const todos = await TodoLists.find({});
    return res.send({ status: "success", todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return res
      .status(500)
      .send({ status: "error", message: "Failed to fetch todos" });
  }
};


const AddTodo = async (req, res) => {
  try {
    const body = req.body;

    
    if (!body.task || !body.task.trim()) {
      return res.status(400).json({ status: "error", message: "Task is required" });
    }


    const newTodo = await TodoLists.create(body);

    res.status(201).json({ status: "success", todo: newTodo });
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ status: "error", message: "Failed to add todo" });
  }
};


const GetTodoById = async (req, res) => {
  const id = req.params.id;
  try {
    const todos = await TodoLists.findOne({_id:id});
    return res.send({ status: "success", todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return res
      .status(500)
      .send({ status: "error", message: "Failed to fetch todos" });
  }
}
const DeleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await TodoLists.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ status: "error", message: "Todo not found" });
    }

    res.json({ status: "success", message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};


const UpdateTodo = (req , res)=>{
    const id = req.params.id;
    return res.send({ status: "success" });
}




module.exports = { AddTodo , DeleteTodo, GetAllTodo, GetTodoById , UpdateTodo };
