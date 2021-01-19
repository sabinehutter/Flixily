const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the commentsController
module.exports = {
  findMoviesByUser: function(req, res) {
    console.log("findmoviesbyuser");
    console.log(req.user)
   db.Movies
     .find({ userId: req.user._id })
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 
  create: function(req, res) {
    console.log("in create method");
    console.log(req.body);
    console.log(req.user);
     // if no user on the session
     if(!req.user) return res.status(401).end('user isnt authenticated')

     db.Movies
      // is this supposed to be email or id? 
      .create(
        {
          userId: req.user._id,
          movieId: req.body.id,
          title: req.body.title,
          image: req.body.image,
          rating: 0
        })
      // .then(({_id}) => db.User.findOneAndUpdate({_id: req.user._id}, { $push: { movies: _id } }, { new: true }))
      .then(() => console.log("aftercreate"))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  rateMovie: function(req, res) {
    console.log("!!!!!!!!");
    console.log(req.body);
    const idee = "ObjectId(" + req.body.id + ")";
    console.log(idee);
     db.Movies
      .findByIdAndUpdate(req.params.id, {rating: req.body.rating 
      })
      .then(dbModel => res.json(dbModel))
      .then((data) => console.log("then, data", data))
      .catch(err => res.status(422).json(err));
  },
};
