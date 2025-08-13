
const Angle = require("./module/Angle");

const app = new Angle();

app.cors({ origin: "*" });

app.get("/amit", (req, res) => {
  res.json({ name: "amit patel" });
});
app.get("/amit/rohan", (req, res) => {
  res.json({ name: "amit / rohan patel" });
});
app.post("/amit", (req, res) => {
  console.log("Data received:", req.body);
  res.json({ message: "Data received successfully" });
});

app.listener(3000, (err) => {
  if (err) console.error(err);
  else console.log("Server running on http://localhost:3000");
});
