const Level = require("./models/Level");
const levels = require("./data");

const importData = async () => {
  await Level.deleteMany();

  try {
    const dbLevels = levels.map((level) => {
      return level;
    });
    await Level.insertMany(dbLevels);
  } catch (error) {
    console.log(error);
  }
};

module.exports = importData;
