const express = require("express");
const supabase = require("../config/supa.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const { data, error } = await supabase.from("ice_res").select("*");

  // gisa.html로 가면서 select한 데이터도 가지고 가라.
  return res.render("gisa", { data });
});

module.exports = router;
