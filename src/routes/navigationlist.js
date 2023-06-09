const express = require("express");
const navigationlistController = require("../controller/navigationlist");
const router = express.Router();

router.post("/addorupdate", navigationlistController.saveOrUpdate);
router.delete("/del", navigationlistController.del);
router.get("/getall", navigationlistController.getAll);
module.exports = router;
