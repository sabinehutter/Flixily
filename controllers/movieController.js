const db = require("../models");

// Defining methods for the commentsController
module.exports = {
  findMoviesByUser: function(req, res) {
    console.log(req.params.userId)
   db.Movies
     .findById(req.params.userId)
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

  rate: function(req, res) {
     db.Movies
      .findOneAndUpdate({ _id: req.params.id }, req.body.rate)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
