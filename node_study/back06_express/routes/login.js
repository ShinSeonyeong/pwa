const express = require('express');
const supabase = require('../utils/supa');
const router = express.Router();
// 백엔드 서버가 재시작되면 로그인이 풀리게 됨.

router.get('logout', (req, res) => {
  req.session.destory(() => {
    console.log('로그아웃 되엇습니다.');
    res.clearCookie('session-cookie');
    res.redirect('/')
  })
})
router.get('/', (req, res, next) => {
  res.render('login');
})

router.post('/', async function (req, res, next) {
  console.log('req.body', req.body);
  const {phone, password, endpoint, p256dh, auth} = req.body;
  console.log('endpoint', endpoint);
  console.log('p256dh', p256dh);
  console.log('auth', auth);

  const {data, error} = await supabase.from('cleaner')
      .select('*')
      .eq('phone', phone)
      .single()
  ;

  // 로그인 성공 시 푸시 구독 정보 저장
  if (endpoint && p256dh && auth) {
    const {error: upsertError} = await supabase
        .from('push_subscribe')
        .upsert([
          {
            phone,
            endpoint,
            p256dh,
            auth,
            updated_at: new Date()
          }
        ], {onConflict: ['phone']});

    if (upsertError) {
      console.error('푸시 구독 정보 저장 실패:', upsertError);
    } else {
      console.log('푸시 구독 정보 저장 성공 - phone:', phone);
    }
  }

  // console.log('data = ')
  // console.log(data);
  // console.log(error);
  if (data) {
    // 로그인 성공 시 req.session.user에 사용자 정보를 저장
    // 세션 만들고 페이지로 이동
    req.session.user = data;
    res.redirect('/');
  } else {
    // login 페이지로 가면서 error 메시지 전달
    res.render('login', {error: "핸드폰번호와 비밀번호를 확인하세요."});
  }
})

module.exports = router;