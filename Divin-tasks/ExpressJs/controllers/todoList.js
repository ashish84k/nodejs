const { TodoLists } = require("../modules/todoList");

const todoList = async (req, res) => {
  try {
    const todos = await TodoLists.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

const addTask = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task || !task.trim()) {
      return res.status(400).json({ error: "Task is required" });
    }

    const newTask = await TodoLists.create({ task });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to add task" });
  }
};
const DeleteTask =  async (req, res) => {
  try {
    const { id } = req.params;
    await TodoLists.findByIdAndDelete(id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};

const EditList = async (req, res) => {
  try {
    const { _id, task } = req.body;

    // Validation
    if (!_id || !task) {
      return res.status(400).json({ message: "ID and task are required" });
    }

    // Update query
    const result = await TodoLists.updateOne(
      { _id: _id },
      { $set: { task } }
    );

    // Check if document matched
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    
    res.json({ message: "Todo updated successfully" , _id , task });
    
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { todoList, addTask , DeleteTask , EditList};
