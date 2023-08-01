const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

router.get("/users", adminController.getAllUsers);

module.exports = router;
