const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    console.log("freeboard Router get 동작");
    res.send("정상 freeboard get");
  })
  .post((req, res, next) => {
    console.log("freeboard Router post 동작");
    res.send("정상 freeboard post");
  })
  .put((req, res, next) => {
    console.log("freeboard Router put 동작");
    res.send("정상 freeboard put");
  });

module.exports = router;
