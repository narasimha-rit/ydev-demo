const express = require("express");
const { httpGetTitles } = require("./call.controller");

const router = express.Router();

router.use("/posts", httpGetTitles);

module.exports = { router };
