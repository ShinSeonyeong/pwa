const supabaseUrl = "https://stboidhsrvtzuejzwlmb.supabase.co";
const supabaseAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0Ym9pZGhzcnZ0enVlanp3bG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNzU3MzYsImV4cCI6MjA1Nzg1MTczNn0.UW0-PabMBGulAwC-f64JNyCUCWOF_z8QET57MUeKeVY";

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonkey);

document.getElementById('sign').addEventListener('click', async function () {
    const $email = document.getElementById('email').value;
    const $password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // $email 안에 있는 변수가 email 형식에 맞으면 true, 아니면 false  
    const result = emailRegex.test($email);
    if (!result) {
        alert('유효한 이메일 주소를 입력하세요.');
        return;
    }

    this.disabled = false;
    this.innerHTML = "회원가입 중..."

    // insert 회원가입 되는 부분: 작성한 메일주소로 메일이 날아감. 
    const res = await supabase.auth.signUp({ email: $email, password: $password });
    console.log(res.error);
    if (res.error) {
        alert('에러발생', res.error);
    } else {
        alert('회원가입 성공, 이메일 인증 후 로그인하세요.');
        this.innerHTML = "회원가입";
    }
});

document.getElementById('login').addEventListener('click', async () => {
    const $email = document.getElementById('email').value;
    const $password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // $email 안에 있는 변수가 email 형식에 맞으면 true, 아니면 false  
    const result = emailRegex.test($email);
    if (!result) {
        alert('유효한 이메일 주소를 입력하세요.');
        return;
    }

    // this.disabled = false;

    const res = await supabase.auth.signInWithPassword({ email: $email, password: $password });
    console.log(res.error);
    if (res.error) {
        alert('에러발생', res.error);
    } else {
        alert('로그인 되었습니다.');
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
});

document.getElementById('logout').addEventListener('click', async () => {
    const res = await supabase.auth.signOut();

    // 기록 확인
    const $loginStatus = document.getElementById('login-status');
    $loginStatus.innerHTML = `로그아웃 되었습니다.`;
});

// 카카오 로그인
document.getElementById('kakao-login').addEventListener('click', async () => {
    const res = await supabase.auth.signInWithOAuth({
        provider: 'kakao'
    })
    console.log(res);
});

document.addEventListener('DOMContentLoaded', async function () {
    const res = await supabase.auth.getUser(); // 현재 로그인되었는지 상태확인
    console.log(res);

    // 로그인 기록 확인
    const $loginStatus = document.getElementById('login-status');
    $loginStatus.innerHTML = `로그인된 ${res.data.user.email}`;
})