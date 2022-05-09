const Level = require("../models/Level");
const StatusCodes = require("http-status-codes");

const createLevel = async (req, res) => {
  const level = await Level.create(req.body);

  res.status(StatusCodes.CREATED).json({ level });
};

const getAllLevels = async (req, res) => {
  const easy_levels = await Level.find({ difficulty: "easy" });
  const medium_levels = await Level.find({ difficulty: "medium" });
  const hard_levels = await Level.find({ difficulty: "hard" });
  const test_levels = await Level.find({ difficulty: "test" });
  res.status(StatusCodes.OK).json({
    levels: {
      easy_levels,
      medium_levels,
      hard_levels,
      test_levels,
    },
  });
};

const getSingleLevel = async (req, res) => {
  const { id: levelId } = req.params;

  const level = await Level.findOne({ _id: levelId });
  if (!level) {
    throw new Error(`No level with id: ${level} found`);
  }
  res.status(StatusCodes.OK).json({ level });
};

module.exports = { createLevel, getAllLevels, getSingleLevel };
