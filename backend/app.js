require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Working!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
