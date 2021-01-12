const router = require("express").Router();
const movieRoutes = require("./movies");
const userRoutes = require("./user");
const likeRoutes = require("./like");

// movie routes
router.use("/saved", movieRoutes);
// user routes
router.use("/user", userRoutes);
// like routes
router.use("/like", likeRoutes)

module.exports = router;
