const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router.route("/swiping")
//   .get(commentsController.findAll)
//   .post(commentsController.create);

// Matches with "/api/comments/:id"

module.exports = router;
