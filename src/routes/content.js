const express = require("express");
const contentController = require("../controller/content");
const router = express.Router();

router.post("/addorupdate", contentController.saveOrUpdate);
router.delete("/del", contentController.del);
router.get("/getall", contentController.getall);
module.exports = router;
