const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config")

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/flixily",
   mongoOptions
);

const userSeed = [
   {
      username: "Admin",
      email: "admin@contact.us",
      password: "1"
   }, 
   {
      username: "Admin2",
      email: "admin2@contact.us",
      password: "2"
   }
];

const movieSeed = [
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


db.Movie.deleteMany({})
  .then(() => db.Movie.collection.insertMany(movieSeed))
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " Movie inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// FROM BOILERPLATE
// // remove all Movies
// db.Movie.deleteMany({})
// // remove all users
//   .then(() => db.User.deleteMany({}))
//   // add user
//   .then(() => db.User.create(userSeed))
//   // add Movies seeds
//   .then((user) => db.Movie.create(MoviesSeeds[0])
//       // add Movie ref to user
//       .then(({_id}) => db.User.findOneAndUpdate({_id: user._id}, { $push: { Movies: _id } }, { new: true }))
//   )
//   .then((user) => db.Movie.create(MoviesSeeds[1])
//       // add Movie ref to user
//       .then(({_id}) => db.User.findOneAndUpdate({_id: user._id}, { $push: { Movies: _id } }, { new: true }))
//   )
//   .then(() => {
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
