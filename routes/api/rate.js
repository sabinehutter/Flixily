const router = require("express").Router();
const commentsController = require("../../controllers/movieController");

// update a movie record with the user rating for the movie

// // Matches with "/api/comments"
// router.route("/")
//   .get(commentsController.findAll)
//   .post(commentsController.create);

// // Matches with "/api/comments/:id"
// router
//   .route("/:id")
//   .get(commentsController.findById)
//   .put(commentsController.update)
//   .delete(commentsController.remove);

module.exports = router;
