const express = require("express");
const router = express.Router();

const UserModel = require("../models/User.model");

// 👇 Start handling routes here
router.get("/", (req, res) => {
  res.render("home.hbs");
});

router.get("/about", (req, res, next) => {
  // ACCESSS TO DB and send data to about.hbs
  UserModel.find()
    .then((response) => {
      console.log("about");
      res.render("about.hbs", {
        users: response,
      });
    })
    .then(
      (error) => {
        next(error);
      } // got to 500 handler (NO ARGUMENTS =  NEXT ROUTE)
    );
});

router.get("/my-hobbies", (req, res) => {
  res.render("my-hobbies.hbs");
});

module.exports = router;
