const express = require("express");
const { RegisterUser } = require("../controllers/adminController.js");

const router = express.Router();

router.post("/register", RegisterUser);

module.exports = router;