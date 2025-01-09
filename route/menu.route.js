const express = require("express");
const route = express.Router();
const { create, readALL } = require("../controller/menu.controller.js");

route.post("/create", create);
route.get("/get", readALL);

module.exports = route;
