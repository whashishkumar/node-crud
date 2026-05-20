const express = require("express");

const {
  getUsers,
  createUser,
  removeUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.post("/create", createUser);
router.delete("/:id", removeUser);

module.exports = router;
