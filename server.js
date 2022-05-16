const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const morgan = require("morgan");
const userRouter = require("./routes/userRoute");
const levelRouter = require("./routes/levelRoute");
const cors = require("cors");
const connectDB = require("./db");
const importData = require("./importData");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(cors());

app.use("/api/v1", userRouter);
app.use("/api/v1", levelRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
      .then(() => console.log("Successfull connect to DB"))
      .catch((err) => console.log(err));
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
// importData();
