"use strict";
const passport = require("passport");
const express = require("express");
const dashboardService = require("../../services/authentication/dashboard");
let router = express.Router();
router.get(
  "/",
  dashboardService.getDashboard
);
module.exports = router;
