// 클래스 문법의 요소 추출/제거
class Users {
    constructor(users) {
        this.users = users;
    }

    // 메서드 축약표현에서 this는 자기자신을 가리키는 것이기에 this가 있어야 한다.
    findById(id) {
        const user = this.users.filter(item => item.id == id); // id값 추출
        console.log(user);
    }

    remove(id) {
        this.users = this.users.filter((item) => item.id != id);
    }
}

const myUsers = new Users([
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
]);

console.log(myUsers);
myUsers.findById(3);

myUsers.remove(2);
console.log(myUsers);

// 1. 요소추출
// const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
// ]
// function findById(id) {
//     const user = users.filter(item => item.id == id); // id값 추출
//     console.log(user);
// }
// findById(3);

// 2. 요소제거
// function remove(id){
//     const user = users.filter(item => item.id == id);
//     console.log(user);
// }

// remove(2);
// console.log(users);