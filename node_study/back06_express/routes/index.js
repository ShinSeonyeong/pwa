const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa');

/* GET home page. */
router.get('/', async function (req, res, next) {
  console.log('여기오나?');
  const result = await supabase.from('ice_res').select('*');
  console.log(result);
  res.render('index', {title: 'Express', user: req.session.user});
});

module.exports = router;
