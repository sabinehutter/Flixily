const mongoose = require("mongoose");

// CREATE THE MOVIE SCHEMA BASED ON SEEDDB.JS

// const movieSchema = new Schema({
// 	username: { type: String, required: true },
// 	body: { type: String, required: true },
// 	date: { type: Date, default: Date.now },
// });

// const Comment = mongoose.model("Comment", commentSchema);
// const User = mongoose.model('Comment', UserSchema);

//Movie Schema Added by Jennifer for below
const movieSchema = new mongoose.Schema({
	id: {
		type: Number,
		unique: true,
		trim: true, 
		autoIndex: true
	  },
	userId: {
		type: Number,
		required: true,
		trim: true
	  },
	movieId: {
    type: Number,
    unique: true,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: false,
    trim: true
  },
  image: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
});

const Movies = new mongoose.model('Movies', movieSchema);

module.exports = Movies;


