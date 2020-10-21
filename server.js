// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { PORT = 6000 } = process.env;

// MIDDLEWARE
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});

// LISTENER
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
