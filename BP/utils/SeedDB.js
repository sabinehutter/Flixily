const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config")

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/flixily",
   mongoOptions
);

const userSeed = [
   {
      id: 1,
      username: "Admin",
      email: "admin@contact.us",
      password: "1"
   }, 
   {
      id: 1,
      username: "Admin2",
      email: "admin2@contact.us",
      password: "2"
   }
];

const movieSeeds = [
   {
      id: 1,
      movieId: "1237890sdfhio",
      title: "The Godfather",
      img: "URL",
      userId: 1,
      rating: 4
   },
   {
      id: 1,
      movieId: "1237890sdfhio",
      title: "The Godfather",
      img: "URL",
      userId: 2,
      rating: 3
   }

];



db.User.create(userSeed)
.then(() => 
   {db.Movie.create(movieSeed)}
   );




// FROM BOILERPLATE
// // remove all comments
// db.Comment.deleteMany({})
// // remove all users
//   .then(() => db.User.deleteMany({}))
//   // add user
//   .then(() => db.User.create(userSeed))
//   // add comments seeds
//   .then((user) => db.Comment.create(commentsSeeds[0])
//       // add comment ref to user
//       .then(({_id}) => db.User.findOneAndUpdate({_id: user._id}, { $push: { comments: _id } }, { new: true }))
//   )
//   .then((user) => db.Comment.create(commentsSeeds[1])
//       // add comment ref to user
//       .then(({_id}) => db.User.findOneAndUpdate({_id: user._id}, { $push: { comments: _id } }, { new: true }))
//   )
//   .then(() => {
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
