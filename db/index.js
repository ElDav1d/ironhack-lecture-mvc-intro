// Connects to the database... if we had one :(
const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/mvc-intro-db";

// ONLY CONNNECTING TO CLUSTER, NOT CREATING DB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("AAAAAALLLLL RIGHT!");
  })
  .catch((err) => {
    console.log(err);
  });

// NOT EXPORTING because we ONLY WANT EXECUTION
