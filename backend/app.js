const express = require("express");
const connectDB = require("./config/database");
const config = require("./config/config");
const app = express();

const PORT = config.port;
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Working!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
