const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema({
  task: { type: String, required: true }
}, { timestamps: true });

const TodoLists = mongoose.model("TodoLists", TodoListSchema);

module.exports = { TodoLists };
