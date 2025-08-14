const mongoose = require("mongoose");

const DbConnected = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/TodoList")
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((err) => {
            console.error("MongoDB connection failed:", err.message);
        });
    } catch (error) {
        console.error("⚠ Unexpected error:", error.message);
    }
};

module.exports ={DbConnected};
