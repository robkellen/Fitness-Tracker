const router = require("express").Router();
const db = require("../../models");

router.get("/workouts", async function (req, res) {
  try {
    res.json(await db.Workout.find());
  } catch (err) {
    res.json(err);
  }
});

router.get("/workouts/range", async function (req, res) {
  try {
    res.json(await db.Workout.find().limit(7));
  } catch (err) {
    res.json(err);
  }
});

router.post("/workouts", async function (req, res) {
  try {
    console.log("workout");
    res.json(await db.Workout.create(req.body));
  } catch (err) {
    res.json(err);
  }
});

router.put("/workouts/:id", async function (req, res) {
  try {
    res.json(
      await db.Workout.findByIdAndUpdate(req.params.id, {
        $push: {
          exercises: [
            {
              type: req.body.type,
              name: req.body.name,
              weight: req.body.weight,
              sets: req.body.sets,
              reps: req.body.reps,
              duration: req.body.duration,
              distance: req.body.distance,
            },
          ],
        },
      })
    );
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
