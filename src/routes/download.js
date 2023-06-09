const express = require("express");
const downloadController = require("../controller/download");
const router = express.Router();

router.post("/addorupdate", downloadController.saveOrUpdate);
router.delete("/del", downloadController.del);
router.get("/getall", downloadController.getall);
module.exports = router;
