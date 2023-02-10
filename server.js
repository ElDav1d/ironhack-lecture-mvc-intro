// Gets access to environment variables/settings
require("dotenv").config();

// EXECUTE ALL OF index.js

require("./db"); // IN NODE goes to index on that folder

// Handles http requests (express is node js framework)
const express = require("express");
const app = express();

// Handles the handlebars
const hbs = require("hbs");

// This part runs most pieces of middleware
app.use(express.static("public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views/");

// MORGAN middleware
// Each client request fires log with HTTP method, response Status and Time
const logger = require("morgan");
app.use(logger("dev"));

const favicon = require("serve-favicon");
app.use(favicon(__dirname + "/public/images/favicon.ico"));

// Local Variables
// TODO

const router = require("./routes"); // require routes object
app.use("/", router); // execute all routes when user calls

// To handle errors.
// allways at END OF ALL CHECKS
const errorHandling = require("./error-handlers");
errorHandling(app);

// Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
