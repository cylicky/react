const express = require("express");
const submenuController = require("../controller/submenu");
const router = express.Router();

router.post("/addorupdate", submenuController.saveOrUpdate);
router.delete("/del", submenuController.del);
router.get("/getall", submenuController.getAll);
module.exports = router;
