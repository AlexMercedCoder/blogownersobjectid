const { Router } = require("express");
const { findById } = require("../models/blog");
const router = Router();
const Blog = require("../models/blog");
const Comment = require("../models/comments");
const mongoose = require("mongoose")
const toId = mongoose.Types.ObjectId

//CREATE A BLOG
router.post("/newBlog", async (req, res) => {
  res.json(await Blog.create(req.body));
});

//CREATE A COMMENT
router.post("/comment/:blogid", async (req, res) => {
//   req.body.blog = toId(req.params.blogid)
  const comment = await Comment.create(req.body);
  const blog = await Blog.findById(req.params.blogid);
  comment.blog = blog._id
  comment.save()
  blog.comments.push(comment._id);
  blog.save();
  res.json(comment);
});

//Get Blogs
router.get("/", async (req, res) => {
  res.json(await Blog.find({}).populate("comments"));
});

//Get Commeents
router.get("/comment", async (req, res) => {
  res.json(await Comment.find({}));
});

module.exports = router;
