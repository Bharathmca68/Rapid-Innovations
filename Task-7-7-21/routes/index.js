const express = require("express");
const router = express.Router();

const logincontroler = require("../controller/login");

router.post("/userLogin", logincontroler.login);
router.post("/reg", logincontroler.register);

module.exports = router;
