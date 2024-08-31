require("dotenv").config();

const express = require("express");
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");
var cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

connectMongoDB(process.env.mongoDB_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`The app is working on port ${PORT}`);
});
