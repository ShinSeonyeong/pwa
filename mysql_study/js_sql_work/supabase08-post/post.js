async function post() {
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const file = document.querySelector('#file').files[0];

    if (!title) {
        alert('제목을 입력하세요.');
        return;
    } else if (!content) {
        alert('내용을 입력하세요.');
        return;
    }
    // file이 없을 때는 테이블로 바로 저장
    // file이 있을 때는 storage에 저장하고 테이블에 저장
    if (!file) {
        savePost(title, content);
    } else {
        const fileUrl = await uploadFile(file);
        // console.log(fileUrl);
        savePost(title, content, fileUrl);
    }
    fetchPosts();
}
async function savePost(title, content, fileUrl = '') {
    const user = sessionStorage.getItem('user');
    if (user == null) {
        alert('로그인이 필요합니다.');
        location.href = 'login.html';
        return;
    }
    const user_id = JSON.parse(user).id;

    const res = await supabase.from('post').insert([{ title, content, user_id, image_url: fileUrl }]).select();
    if (res.status === 201) {
        Swal.fire({
            title: '저장 성공',
            icon: 'success',
            confirmButtonText: '확인'
        });
    } else {
        Swal.fire({
            title: '저장 실패',
            icon: 'error',
            confirmButtonText: '확인'
        });
    }
}
async function uploadFile(file) {
    const filename = `${crypto.randomUUID()}.${file.name.split('.').pop()}`;
    await supabase.storage.from('ex01').upload(filename, file);

    // 업로드한 파일을 접속할 수 있는 주소 가져오기
    const res = await supabase.storage.from('ex01').getPublicUrl(filename);
    // console.log(res);
    return res.data.publicUrl;
}

async function fetchPosts() {
    const res = await supabase.from('post').select('*').order('created_at', { ascending: false });
    // error가 있으면 내용이 true, 없으면 false
    if (res.error) {
        alert("에러발생");
        return;
    }

    const $postList = document.querySelector('#post-list');
    $postList.style.display = 'grid'; // 바둑판형식으로 나옴
    $postList.style.gridTemplateColumns = `1fr 1fr 1fr`; // 3개의 column
    $postList.innerHTML = ""; // 기존 것을 삭제 후 추가해줌.

    res.data.forEach(data => {
        const post = document.createElement('div'); // div태그 만들어라.

        post.innerHTML = `
                        <h3>${data.title}</h3>
                        <p>${data.content}</p>
                        <img src='${data.image_url}' width='250'/>
                        <div>
                            <button>수정</button>
                            <button onclick='deletePost("${data.id}")'>삭제</button>
                        </div>
                    `;

        $postList.appendChild(post); // 자식태그로 div태그 추가
    });
}

async function deletePost(id) {
    const res = await supabase.from('post').delete().eq('id', id);
    console.log(res);
    const {error, status} = res;
    if(error){
        alert('에러 발생. 삭제 실패');
    }else{
        Swal.fire('완료', '게시글이 삭제되었습니다', 'success');
        fetchPosts();
    }
}

// DOMContentLoaded: html, css가 다 불러와진 후 실행되는 이벤트 함수
document.addEventListener('DOMContentLoaded', fetchPosts);