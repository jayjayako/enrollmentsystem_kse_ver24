var express = require("express");
var router = express.Router();

var dashboard = require("../../controllers/staff/dashboard");

router.use("/dashboard", dashboard);

module.exports = router;
