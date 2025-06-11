const express = require("express");
const router = express.Router();

// 주문정보를 저장
router.post("/save", (req, res, next) => {
  console.log("api POST 통신");
});

module.exports = router;
