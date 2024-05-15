const express = require("express");
const cors = require("cors");
const eventsRouter = require("./routes/eventsRouter.js");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});
