const express = require("express");
const router = express.Router();
const {
  createUser,
  findAllUsers,
  deleteUser,
  updateUser,
  updateForm,
} = require("../services/userService");

// Import the validation middleware
const { validate, userSchema } = require("../middlewares/validate");

// Routes for User CRUD operations
router.post("/create", validate(userSchema), createUser); // Create a new user
router.get("/", findAllUsers); // Get all users
router.post("/delete/:id", deleteUser); // Delete a user by ID
router.get("/update/:id", updateForm); // Get form to update a user
router.post("/update/", validate(userSchema), updateUser); // Update a user

module.exports = router;
