const test = [
    {
        "id": "c821ecb9-e4aa-4a14-9482-6f9f9e7de3dd",
        "name": "테스트로 이름 바꿈",
        "email": "dL@naver.com",
        "created_at": "2025-03-05T06:57:48.111009",
        "active": true
    },
    {
        "id": "5d1cd6c0-dc2e-497d-a59e-7f74619d903a",
        "name": "testName",
        "email": "Bob@gmail.com",
        "created_at": "2025-03-05T07:28:20.020791",
        "active": true
    },
    {
        "id": "5c0068be-a5cb-4e7c-816a-362d744cfb6d",
        "name": "asflkjasd",
        "email": "alice@example.com",
        "created_at": "2025-03-05T06:01:47.880426",
        "active": true
    },
    {
        "id": "6ea08397-7ca7-4d46-a050-9a62df266ace",
        "name": "홍길동",
        "email": "hong@example.com",
        "created_at": "2025-03-06T05:34:22.071214",
        "active": true
    },
    {
        "id": "f0c4e9c6-e64a-41c2-b4f4-ec81a60f9cc3",
        "name": "김철수",
        "email": "kim@example.com",
        "created_at": "2025-03-06T05:34:22.071214",
        "active": true
    }, {
        "id": "7711b564-916e-481c-af59-8ae1f4bbc254",
        "name": "이영희",
        "email": "lee@example.com",
        "created_at": "2025-03-06T05:34:22.071214",
        "active": true
    },
    {
        "id": "36c78748-2bc8-4918-ba9b-fe9306b85c4b",
        "name": "qqq",
        "email": "qqq@gmail.com",
        "created_at": "2025-03-06T06:02:30.741661",
        "active": true
    }, {
        "id": "faba95a8-85cc-45be-acab-dd6cf87e8e4e",
        "name": "eee",
        "email": "eee@gmail.com",
        "created_at": "2025-03-06T06:02:30.741661",
        "active": true
    },
    {
        "id": "9ffe360d-2f23-4cd0-9c54-169c365ed015",
        "name": "hhh",
        "email": "hhh@gmail.com",
        "created_at": "2025-03-06T06:02:30.741661",
        "active": true
    }
]

let rows = '';
for (let i = 0; i < test.length; i++) {
    rows = rows + `<tr>
        <td${test[i].id}</td>
        <td>${test[i].name}</td>
        <td>${test[i].email}</td>
        <td>${test[i].created_at}</td>
        <td>${test[i].active}</td>
    </tr>`;
}
// console.log(rows);

let users = `
<div>
    <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>가입날짜</th>
        </tr>
        ${rows}
    </table>
</div>`;

console.log(users);