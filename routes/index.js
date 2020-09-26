const router = require("express").Router();
const path = require("path");

const pubDir = path.resolve(__dirname, "../public");
router.use("/api", require("./api"));

router.get("/", function (req, res) {
  res.sendFile(path.resolve(pubDir, "index.html"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.resolve(pubDir, "stats.html"));
});

router.get("/exercise", function (req, res) {
  res.sendFile(path.resolve(pubDir, "exercise.html"));
});

module.exports = router;
