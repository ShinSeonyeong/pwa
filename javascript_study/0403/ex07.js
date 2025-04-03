const a = "abc";
console.log(a.repeat(2));
// 강제종료 되면 종료 구문이 실행되지 않음.
// console.log("abc".repeat(-1));

console.log("종료되었습니다.");

const str = "Hello Hello";
console.log(str.replace(/hello/ig, 'LEE'));

// 카멜케이스
let todoList; // -> todo_list로 바꾸는 방법

// 스네이크케이스
let todo_list; // -> todoList로 바꾸는 방법