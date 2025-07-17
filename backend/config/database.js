const mongoose = require("mongoose");
const config = require("./config")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.databaseURI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error: ", error.message);
    process.exit();
  }
};

module.exports = connectDB;
