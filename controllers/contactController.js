const express = require("express");
const router = express.Router();
const { createContact } = require("../services/contactService");

router.post("/create", createContact);

module.exports = router;
