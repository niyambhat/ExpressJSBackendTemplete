const express = require("express");

const authController = require("../controller/authController");
const adminController = require("../controller/adminController");
const router = express.Router();

router.post("/login", authController.login);
// router.get("/login", adminController.getAllUsers);

module.exports = router;
