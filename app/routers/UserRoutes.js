const express = require('express');
const UserController = require('../controllers/User');

const router = express.Router();

router.get("/users",UserController.getAllUsers);
router.post("/user", UserController.save);


module.exports = router;
