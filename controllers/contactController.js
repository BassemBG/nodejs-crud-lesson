const express = require("express");
const router = express.Router();
const { createContact, findAll } = require("../services/contactService");

router.post("/create", createContact);
router.post("/findAll", findAll);

module.exports = router;
