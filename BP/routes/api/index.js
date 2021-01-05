const router = require("express").Router();
const rateRoutes = require("./rate");
const userRoutes = require("./user");
const likeRoutes = require("./like")

// comments routes
router.use("/rate", rateRoutes);
// user routes
router.use("/user", userRoutes);
// swiping
router.use("/like", likeRoutes);

module.exports = router;
