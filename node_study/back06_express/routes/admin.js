const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa.js');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const {data} = await supabase.from('cleaner').select();
  res.render('admin', {cleaners: data});
});

router.post('/', async function (req, res, next) {
  const {name, email, phone, addr} = req.body;
  const {error} = await supabase.from('cleaner')
      .insert({name, email, phone, "address":addr});
  if (error) {
    console.log('슈파베이스 등록 시 에러 발생');
    console.log(error);
  };

  // const {data} = await supabase.from('cleaner').select();
  // res.render('admin', {cleaners: data});
  res.redirect('/admin');
  // res.render('admin');
});

module.exports = router;
