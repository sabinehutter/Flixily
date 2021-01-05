const router = require("express").Router();
const commentRoutes = require("./comments");
const userRoutes = require("./user");
const swipingRoutes = require("./swiping")

// comments routes
router.use("/comments", commentRoutes);
// user routes
router.use("/user", userRoutes);
// swiping
router.use("/swiping", swipingRoutes);

module.exports = router;
