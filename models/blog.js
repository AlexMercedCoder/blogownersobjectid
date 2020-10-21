const { Schema, model } = require("mongoose");
const mongoose = require("../db/conn");

const blogSchema = new Schema({
  title: String,
  post: String,
  comments: [{ ref: "Comment", type: mongoose.Types.ObjectId }],
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;
