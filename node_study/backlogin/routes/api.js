const express = require('express');
const router = express.Router();
const supabase = require('../database/db');
const bycrypt = require('bcrypt');
const {AuthWeakPasswordError} = require("@supabase/supabase-js");

router.post('/login', async (req, res) => {
  const {id, pw} = req.body;
  const sendData = {};
  const {data, error} = await supabase.from('member').select().eq('id', id);
  if (data.length > 0) {
    // admin 계정 존재O
    // 비밀번호 같은지 확인, bcrypt 암호화여서 compare 함수로 비교

    console.log('password', pw);
    console.log('data[0].pw', data[0].pw);
    console.log('비교암호', await bycrypt.compare(pw.trim(), data[0].pw));

    if (await bycrypt.compare(pw.trim(), data[0].pw)) {
      // 비밀번호 일치하면
      sendData.flag = 'success';
      sendData.message = '성공적으로 로그인되었습니다.';
      req.session.user = {id: data[0].id, addr: data[0].addr} // 세션에 사용자 정보 저장
      res.json(sendData);
    } else {
      // 비밀번호 틀리면
      sendData.flag = 'error';
      sendData.message = '비밀번호가 틀렸습니다.';
      res.status(401).json(sendData);
    }
  } else {
    // admin 계정 존재X
    sendData.flag = "fail";
    sendData.message = '아이디와 비밀번호를 확인해주세요.';
    res.status(401).json(sendData);
  }

  res.json(sendData);
})

router.get('me', async (req, res) => {
  if (req.session.user) {
    res.json({status: false, user: req.session.user});
  } else {
    res.json({status: false});
  }
})

module.exports = router;