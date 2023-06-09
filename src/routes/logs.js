const express = require("express");
const logsController = require("../controller/logs");
const router = express.Router();

router.post("/addorupdate", logsController.saveOrUpdate);
router.delete("/del", logsController.del);
router.get("/getall", logsController.getAll);
module.exports = router;
