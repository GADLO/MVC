const { Router } = require("express");
const { indexView, detailView } = require("../controller/index");

const router = new Router();

router.get("/", indexView);
router.get("/detail/:id", detailView);
module.exports = { router };
console.log("router ready");
