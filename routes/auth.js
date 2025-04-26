const express = require("express");
const router = express.Router();
const { register } = require("../controllers/register");
const { signin } = require("../controllers/signin");
const { getMe } = require("../controllers/getMe");
const { protect } = require("../middleware/auth");

router.post("/login", signin);
router.post("/register", register);
router.get("/getme", protect, getMe);

module.exports = router;
