const express = require("express");

const router = express.Router();
const { createContact, findAll, deleteContact, updateContact, updateForm } = require("../services/contactService");

//import the validation middleware
const { validate, contactSchema } = require("../middlewares/validate");


router.post("/create", validate(contactSchema), createContact);
router.get("/", findAll);
router.post('/delete/:id',deleteContact);
router.get('/update/:id',updateForm);
router.post('/update/',updateContact);


module.exports = router;
