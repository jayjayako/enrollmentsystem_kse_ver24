var express = require("express");
var router = express.Router();

var authentication = require("./authentication");
var studentregister = require("./studentregister");
var superadmin = require("./superadmin");
var admin = require("./admin");
var staff = require("./staff");
var student = require("./student");

router.use("/authentication", authentication);
router.use("/studentregister", studentregister);
router.use("/superadmin", superadmin);
router.use("/admin", admin);
router.use("/staff", staff);
router.use("/student", student);

module.exports = router;
