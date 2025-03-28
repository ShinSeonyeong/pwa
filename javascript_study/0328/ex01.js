// sort() 정렬함수
/*
const arr = [10,2,4,1];
arr.sort(); // 원시값에 대한 sort()
console.log(arr);
*/

function mysort(a, b) {
    // console.log(`a = ${JSON.stringify(a)}`);
    // console.log(`b = ${JSON.stringify(b)}`);
    // return a.id - b.id;
    return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
}

const todos = [
    { id: 5, content: "CSS" },
    { id: 2, content: "JAVASCRIPT" },
    { id: 1, content: "HTML" },
]

todos.sort(mysort);

console.log(todos);