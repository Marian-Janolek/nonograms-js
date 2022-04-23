const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema(
  {
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: [true, "Please provide difficulty"],
    },
    verHints: {
      type: String,
      required: [true, "Please provide vertical hints as String"],
    },
    horHints: {
      type: String,
      required: [true, "Please provide horizontal hints as String"],
    },
    result: {
      type: [Number],
      required: [true, "Please provide result array"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Level", LevelSchema);
