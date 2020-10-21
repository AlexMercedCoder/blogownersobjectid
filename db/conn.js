require("dotenv").config();
const mongoose = require("mongoose");
const db = mongoose.connection;
const { MONGODBURI } = process.env;
const config = { useNewUrlParser: true, useUnifiedTopology: true };

//CONNECT
mongoose.connect(MONGODBURI, config);

//EVENTS
db.on("open", () => {
  console.log("Connected to Mongo");
})
  .on("close", () => {
    console.log("disConnected to Mongo");
  })
  .on("error", (error) => {
    console.log(error);
  });

//EXPORT THE CONNECTION
module.exports = mongoose;
