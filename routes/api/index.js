const router = require("express").Router();
const gameRoutes = require("./games");
const authRoutes = require("./auth");

// Book routes
// router.use("/games", gameRoutes);
router.use(authRoutes)

module.exports = router;