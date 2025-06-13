const express = require('express');
const supabase = require('../utils/supa');
const router = express.Router();

router.get('/checkout', async function (req, res, next) {
  console.log(req.query);
  const {data, error} = await supabase.from('ice_res').select().eq('res_no', req.query.res_no);

  data[0].tel = data[0].tel.replace(/-/g, '')
  console.log(data[0].tel);
  res.render('pay/checkout', {title: "예약내역 결제", reservation: data[0]});
})

// 결제성공 -> ice_res 테이블에 res_no 예약번호 찾아서 결제완료 상태로 업데이트
router.get('/success', async function (req, res, next) {
  // console.log(req.query);
  // 결제완료 처리
  supabase.from('ice_res').update({status: '결제완료'}).eq('res_no', req.query.orderId);
  const {data} = await supabase.from('ice_res').select('*').eq('res_no', req.query.orderId);

  return res.render('pay/success', {reservation: data[0]});
})


module.exports = router;