const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  console.log(req.body);
  const {id} = req.body;
  const sendData = {
    msg: 'success',
  }
  if (id === 'admin') {
    // req.session.user =
    res.json(sendData);
  } else {
    sendData.msg = 'fail';
    res.json(sendData);
  }
})

module.exports = router