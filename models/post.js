const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the subdocuments get created first - embedded document
const commentSchema = new mongoose.Schema({
    header: String,
    body: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true });

const postSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [commentSchema]
}, { timestamps: true });

// create model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;