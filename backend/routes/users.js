const router = require("express").Router(); // for routing
let User = require("../models/user.model"); // get the model

router.route("/").get((req, res) => {
  // getting http get request
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  // posting the name and adding
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save() // save it
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
