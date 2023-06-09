const express = require("express");
const UserController = require("../controller/users");
//const { authMiddleware } = require("../middleware/admin/auth.middleware");
const router = express.Router();

// router.post("/register", UserController.createUser);
// router.post("/login", UserController.Login);
// router.get("/getuser", authMiddleware, UserController.getUser);
// router.patch("/updateuser", authMiddleware, UserController.updateUser);

module.exports = router;
