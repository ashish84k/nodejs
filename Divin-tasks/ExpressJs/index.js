const express = require("express");
const userRouter = require("./Routers/user");
const DbConnected = require("./database/dbConnected");
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors({}));
app.use(express.json({}))
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Server Is Started</h1>");
});

const startServer = async () => {
  try {
    DbConnected();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server not started due to DB error:", error.message);
  }
};

startServer();
