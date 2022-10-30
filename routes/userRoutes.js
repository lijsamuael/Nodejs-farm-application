const express = require("express");

const {checkId, getuUsers, getUser, deleteUser, createUser} = require("../controllers/userController");

const router = express.Router();

router.param('id', checkId)

router.get('/', getuUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.post("/", createUser);

module.exports = router;