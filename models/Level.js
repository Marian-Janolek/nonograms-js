const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema(
  {
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: [true, "Please provide difficulty"],
    },
    verHints: {
      type: [[Number]],
      required: [true, "Please provide vertical hints as 2d array"],
    },
    horHints: {
      type: [[Number]],
      required: [true, "Please provide horizontal hints as 2d array"],
    },
    result: {
      type: [Number],
      required: [true, "Please provide result array"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Level", LevelSchema);
