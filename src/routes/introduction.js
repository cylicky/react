const express = require("express");
const introductionController = require("../controller/introduction");
const router = express.Router();

router.post("/addorupdate", introductionController.saveOrUpdate);
router.delete("/del", introductionController.del);
router.get("/getall", introductionController.getAll);
module.exports = router;
