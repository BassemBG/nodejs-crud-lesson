const db = require("../database/database")

async function createUser(req, res, next) {
  try {
    const { User } = await db();
    const { username, password, birthday } = req.body;
    await User.create({ username, password, birthday });
    res.redirect("/users");
  } catch (e) {
    console.error("Error creating user:", e);
    res.status(500).send("Internal Server Error");
  }
}

async function findAllUsers(req, res, next) {
  try {
    const { User } = await db();
    const users = await User.findAll();
    res.render("users/list.twig", { title: "User List", users });
  } catch (e) {
    console.error("Error fetching users:", e);
    res.status(500).send("Internal Server Error");
  }
}

async function deleteUser(req, res, next) {
  try {
    const { User } = await db();
    const { id } = req.params;

    await User.destroy({ where: { id } });
    res.redirect("/users");
  } catch (e) {
    console.error("Error deleting user:", e);
    res.status(500).send("Internal Server Error");
  }
}

async function updateUser(req, res, next) {
  try {
    const { User } = await db();
    const { id, username, password, birthday } = req.body;

    await User.update(
      { username, password, birthday },
      { where: { id } }
    );
    res.redirect("/users");
  } catch (e) {
    console.error("Error updating user:", e);
    res.status(500).send("Internal Server Error");
  }
}

async function updateForm(req, res, next) {
  try {
    const { User } = await db();
    const foundUser = await User.findOne({ where: { id: req.params["id"] } });
    if (!foundUser) return res.status(404).send("User not found");
    res.render("users/update.twig", { user: foundUser });
  } catch (e) {
    console.error("Error rendering update form:", e);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  createUser,
  findAllUsers,
  deleteUser,
  updateUser,
  updateForm,
};
