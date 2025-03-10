document.querySelector('#input-button-post').addEventListener('click', async function () {
    const post = document.querySelector('#post').value;

    if (post.length == 0) {
        Swal.fire({
            icon: "error",
            title: "저장실패",
            text: "글을 입력해주세요.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }
    
    const res = await supabase
        .from('post')
        .insert([
            { post }
        ]).select();

    if (res.status === 201) {
        Swal.fire({
            title: "저장성공",
            icon: "success",
            draggable: true
        })
            .then(() => {
                postSelect();
            });
    }


})

const $postDiv = document.querySelector('#post-div');
async function postSelect() {
    const res = await supabase.from('post').select();
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
            <tr>
                <td>${res.data[i].id}</td>
                <td>${res.data[i].user_id}</td>
                <td>${res.data[i].post}</td>
                <td>${res.data[i].created_at}</td>
            </tr>`;
    }

    let post = `
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>user_id</th>
                    <th>작성글</th>
                    <th>입력날짜</th>
                </tr>
                ${rows}
            </table>
        </div>`;
    $postDiv.innerHTML = post;
    $postDiv.classList.add('show');
}