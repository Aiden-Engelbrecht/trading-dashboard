const express = require("express");
const router = express.Router();

const {
  getMarket
} = require("../controllers/marketController");

router.get("/", getMarket);

module.exports = router;