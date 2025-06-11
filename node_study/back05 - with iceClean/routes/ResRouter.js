const express = require("express");
const router = express.Router();
const supabase = require('../config/supa.js')
console.log(supabase);

// 주문정보를 저장
router.post("/save", async (req, res, next) => {
  console.log("req.body", req.body);
  console.log('api POST 통신');

      const data = await supabase
        .from('ice_res')
        .insert([req.body]);

  res.send('success');
});

module.exports = router;
