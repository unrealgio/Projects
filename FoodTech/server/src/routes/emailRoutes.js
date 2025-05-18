const express = require("express");
const { sendEmail } = require("../controllers/emailController");
const validateRequest = require("../middlewares/validateRequest");

const router = express.Router();

router.post("/send-email", validateRequest, sendEmail);

module.exports = router;