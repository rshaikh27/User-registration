const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { saveUser } = require("./controllers/user");
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.post("/api/user", saveUser);

const uri = process.env.DB_URI;
console.log(uri);

mongoose.connect(uri, {}, (err) => {
  console.log(err);
});

app.listen(5000, () => console.log("Server started on port 5000"));
