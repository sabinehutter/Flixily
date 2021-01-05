const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE THE MOVIE SCHEMA BASED ON SEEDDB.JS

const movieSchema = new Schema({
	username: { type: String, required: true },
	body: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
