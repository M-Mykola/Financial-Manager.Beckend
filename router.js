const { Router } = require("express");

const categorys = require("./modules/Categories/router.js");
const tranzactions = require("./modules/Tranzactions/router");

const router = new Router();

router.use("/Category", categorys);
router.use("/Tranzactions", tranzactions);

module.exports = router;
