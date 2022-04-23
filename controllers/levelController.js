const Level = require("../models/Level");
const StatusCodes = require("http-status-codes");

const createLevel = async (req, res) => {
  // const {difficulty, verHints, horHints, result} = req.body
  const level = await Level.create(req.body);

  res.status(StatusCodes.CREATED).json({ level });
};

const getAllLevels = async (req, res) => {
  const levels = await Level.find({});
  res.status(StatusCodes.OK).json({ levels, count: levels.length });
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
