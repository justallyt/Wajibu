
const express = require('express')
const { sendClientMessage } = require("../controllers/clientController")

const router = express.Router();

router.post('/send', sendClientMessage)

module.exports = router