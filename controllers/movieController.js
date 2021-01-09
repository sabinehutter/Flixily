const db = require("../models");

// Defining methods for the commentsController
module.exports = {
  // findAll: function(req, res) {
  //   db.Movies
  //     .find(req.query)
  //     // .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
     console.log(req.params.id)
    db.Movies
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    console.log(req.params.userId)
   db.Movies
     .findById(req.params.userId)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
  create: function(req, res) {
     // if no user on the session
     if(!req.user) return res.status(401).end('user isnt authenticated')

     db.Movies
      // is this supposed to be email or id? 
      .create({...req.body, email: req.user.email})
      .then(({_id}) => db.User.findOneAndUpdate({_id: req.user._id}, { $push: { movies: _id } }, { new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  rate: function(req, res) {
     db.Comment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //    db.Comment
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  // TO-DO: find by user
};