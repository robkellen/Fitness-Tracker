const router = require("express").Router();
const db = require("../../models");

router.get("/workouts", async function (req, res) {
  // try {
  res.json(await db.Workout.find());
  // } catch (err) {}
});

router.get("/workouts/range", async function (req, res) {
  // try {
  res.json(await db.Workout.find().limit(7));
  // } catch (err) {}
});

router.post("/workouts", async function (req, res) {
  // try {
  res.json(await db.Workout.create(req.body));
  // } catch (err) {}
});

router.put("/workouts/:id", async function (req, res) {
  // try {
  res.json(
    await db.Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
  );
  // } catch (err) {}
});

module.exports = router;
