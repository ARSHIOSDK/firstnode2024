const express = require('express');
const UserController = require('../controllers/User');

const router = express.Router();

router.post("/user", UserController.save);
router.get("/users",UserController.getAllUsers);
router.get('/users2/:phone', UserController.findUser);
router.put("/updateUser/:phone",UserController.updateUser);
router.delete("/delete",UserController.deleteUser);router.post("/user", UserController.save);


module.exports = router;
