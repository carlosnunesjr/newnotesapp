const {Router} = require("express");

const ctrlIndex = require("../controllers/index.controller");

const router = Router();

router.get("/", ctrlIndex.renderIndex);

router.get("/about",ctrlIndex.renderAbout);

module.exports = router;