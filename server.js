const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRouter = require("./routes/userRoute");
const levelRouter = require("./routes/levelRoute");
const cors = require("cors");
const connectDB = require("./db");
const importData = require("./importData");

dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/v1", userRouter);
app.use("/api/v1", levelRouter);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

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
