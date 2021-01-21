const router = require("express").Router();
const movieController = require("../../controllers/movieController");
const commentsController = require("../../controllers/movieController");

// send the movie id, title, image, and user id to our movies collection

// Matches with "/api/saved/"
router.route("/")
  .get(movieController.findMoviesByUser)

// Matches with "/api/saved/rate/:id"
router.route("/rate/:id")
  .post(movieController.rateMovie);
  

router.route("/delete/:id")
  .delete(movieController.deleteMovie);

  
module.exports = router;
