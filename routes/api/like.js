const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// update a movie record with the user rating for the movie

// Matches with "/api/like/"
router.route("/")
  .post(movieController.create);


module.exports = router;
