const mongoose = require("mongoose");

const DbConnected = () => {
    try {
        mongoose.connect("mongodb+srv://ashish84k:HackerLover2@cluster0.mongodb.net/TodoList?retryWrites=true&w=majority")
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

module.exports = DbConnected;
