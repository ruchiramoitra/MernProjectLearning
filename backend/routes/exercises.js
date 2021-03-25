const router = require("express").Router(); // for routing
let Exercise = require("../models/exercise.model"); // get the model

router.route("/").get((req, res) => {
  // getting http get request
  Exercise.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  // posting the name and adding
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date(req.body.date);

  const newExercise = new Exercise({ username, description, duration, date });

  newExercise
    .save() // save it in mongoose db
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  // get info by id
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  // delete by id
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Excercide deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  // update by id
  Exercise.findByIdAndUpdate(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
