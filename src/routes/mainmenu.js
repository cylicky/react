const express = require("express");
const mainmenuController = require("../controller/mainmenu");
const router = express.Router();

router.post("/addorupdate", mainmenuController.saveOrUpdate);
router.delete("/del", mainmenuController.del);
router.get("/getall", mainmenuController.getAll);
module.exports = router;
