const { getAllUsers, login, register } = require("../controllers/user");

const express = require("express");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/users", authMiddleware, getAllUsers);

module.exports = { router };
