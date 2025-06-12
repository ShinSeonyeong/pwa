const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa');

router.get('/', async function (req, res, next) {
  const {data, error} = await supabase.from('ice_res').select('*');
  console.log(data);
  res.render('reservation', {data});
})

router.post('/', async function (req, res, next) {
  console.log(req.body);
  res.send('success');
})

module.exports = router;