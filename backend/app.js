const express = require("express");
const connectDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const createHttpError = require("http-errors");
const app = express();

const PORT = config.port;
connectDB();

// Root Endpoint
app.get("/", (req, res) => {
  res.json({ message: "Working!" });
});

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
