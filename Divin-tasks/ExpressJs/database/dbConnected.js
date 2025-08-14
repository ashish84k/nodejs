const mongoose = require("mongoose");

const DbConnected = () => {
    try {
        mongoose.connect("MONGO_URI=mongodb+srv://ashish84k:HackerLover3@ashish84k.yqjnhbz.mongodb.net/TodoList")
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
