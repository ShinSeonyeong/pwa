const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const result = await supabase.from('ice_res').select('*');
  console.log(result);
  res.render('index', {title: 'Express', user: req.session.user});
});

module.exports = router;
