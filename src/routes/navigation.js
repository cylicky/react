const express = require("express");
const navigationController = require("../controller/navigation");
const router = express.Router();

router.post("/addorupdate", navigationController.saveOrUpdate);
router.delete("/del", navigationController.del);
router.get("/getall", navigationController.getAll);
router.get("/getAlllist", navigationController.getAllList);
router.post("/update", navigationController.updates);
module.exports = router;
