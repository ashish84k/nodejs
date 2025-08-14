const { default: mongoose } = require("mongoose");

const TodoListSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    },
    dueDate: {
      type: Date
    },
    tags: {
      type: [String],
      default: []
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "cancelled"],
      default: "pending"
    },
    completed: {
      type: Boolean,
      default: false
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    reminder: {
      type: Date
    },
    attachments: {
      type: [String], // store file URLs
      default: []
    },
    subTasks: [
      {
        title: { type: String, required: true },
        completed: { type: Boolean, default: false }
      }
    ]
  },
  { timestamps: true }
);

const TodoLists = mongoose.model("TodoLists", TodoListSchema);

module.exports = { TodoLists };
