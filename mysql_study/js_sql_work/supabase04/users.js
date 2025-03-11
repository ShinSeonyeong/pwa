// $: html 태그 요소
document.querySelector('#input-button-user').addEventListener('click', async function () {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    // console.log(`name ${name}`);
    // console.log(`email ${email}`);

    if (email.length == 0) {
        Swal.fire({
            icon: "error",
            title: "입력실패",
            text: "email이 빈 값입니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
            .then(() => {
                document.querySelector('#email').focus();
            });

        return;
    }
    const res = await supabase
        .from('users')
        .insert([
            { name, email }
        ])
        .select();
    console.log(res);
    if (res.status == '409') {
        // alert('user입력에 실패하였습니다. email이 중복입니다.');
        await Swal.fire({
            icon: "error",
            title: "저장실패",
            text: "email이 중복입니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else if (res.status === 201) {
        Swal.fire({
            title: "저장성공",
            icon: "success",
            draggable: true
        })
            .then(() => {
                usersSelect();
            });
    }
})

const $usersDiv = document.querySelector('#users-div');
// $usersDiv.innerHTML = 'abcdefghi';
// $usersDiv.style.backgroundcolor = 'rgh(20, 100, 200';
// users테이블 모든 내용 가져와서 출력하는 함수
async function usersSelect(email) {
    var res = await supabase.from('users').select()
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
            <tr onclick='userRowClick(this);' style='cursor:pointer;'>
                <td>${res.data[i].id}</td>
                <td>${res.data[i].name}</td>
                <td>${res.data[i].email}</td>
                <td>${res.data[i].created_at}</td>
                <td>${res.data[i].active}</td>
            </tr>`;
    }

    let users = `
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>가입날짜</th>
                    <th>활성화</th>
                </tr>
                ${rows}
            </table>
        </div>`;
    $usersDiv.innerHTML = users;
    $usersDiv.classList.add('show');
}

function userRowClick(trTag) {
    const $updateUserId = document.querySelector('#update-user-id');
    const $updateName = document.querySelector('#update-name');
    const $updateEmail = document.querySelector('#update-email');

    const userId = trTag.children[0].innerText;
    const userName = trTag.children[1].innerText;
    const userEmail = trTag.children[2].innerText;

    $updateUserId.innerHTML = userId;
    $updateName.value = userName;
    $updateEmail.value = userEmail;

    const $modal = document.querySelector('#modal');
    $modal.classList.remove('hidden');
}

document.querySelector('#update-button-user').addEventListener('click', async function () {
    const $updateUserId = document.querySelector('#update-user-id');
    const $updateName = document.querySelector('#update-name');
    const $updateEmail = document.querySelector('#update-email');

    const res = await supabase
        .from('users')
        .update({
            name: $updateName.value,
            email: $updateEmail.value
        })
        .eq('id', $updateUserId.innerHTML)
        .select();
    if (res.status == 200) {
        const $modal = document.querySelector('#modal');
        $modal.classList.add('hidden');
        Swal.fire({
            title: "수정성공",
            icon: "success",
            draggable: true
        });
        usersSelect();
    }
})