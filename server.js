// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { PORT = 6000 } = process.env;
const mongoose = require("./db/conn");
const blogRouter = require("./controllers/blog");

// MIDDLEWARE
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/blog", blogRouter);

// LISTENER
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
