const router = require("express").Router();
const commentsController = require("../../controllers/movieController");

// send the movie id, title, image, and user id to our movies collection

// Matches with "/api/explore"
router.route("/like")
//   .get(commentsController.findAll)
//   .post(commentsController.create);

// Matches with "/api/explore/:id"

module.exports = router;
