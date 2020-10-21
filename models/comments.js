const {Schema, model} = require("mongoose")
const mongoose = require("../db/conn")

const commentSchema = new Schema({
    title: String,
    post: String,
})

const Comment = model("Comment", commentSchema)

module.exports = Comment