const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
import("dotenv/config");

const database = (module.exports = () => {
  try {
    mongoose.connect(
      "mongodb+srv://Admin_Victoria:1LMbme4IA157CPIt@clusterx.govu4la.mongodb.net/myBlog"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
});

database();

// middlewears

app.use(bodyParser.json());
app.use(cors());

// import Routes

const postsRouts = require("./routes/posts");
app.use("/posts", postsRouts);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
