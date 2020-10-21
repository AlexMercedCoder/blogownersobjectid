const {Schema, model} = require("mongoose")
const mongoose = require("../db/conn")

const commentSchema = new Schema({
    title: String,
    post: String,
    blog: {ref: "Blog", type: mongoose.Types.ObjectId}
})

const Comment = model("Comment", commentSchema)

module.exports = Comment