const express = require("express");
const router = express.Router();
const {
  createLevel,
  getAllLevels,
  getSingleLevel,
} = require("../controllers/levelController");

router.route("/newLevel").post(createLevel);
router.route("/level/all").get(getAllLevels);
router.route("/level/:id").get(getSingleLevel);

module.exports = router;
