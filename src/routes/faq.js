const express = require("express");
const faqsController = require("../controller/faqs");
const router = express.Router();

router.post("/addorupdate", faqsController.saveOrUpdate);
router.delete("/del", faqsController.del);
router.get("/getall", faqsController.getAll);
module.exports = router;
