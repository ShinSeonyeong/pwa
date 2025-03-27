const arr = [1, 2, 3, 4, 2, 10];

// 1) 
// const sorted = (a, b) => {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

console.log(arr.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}));

// 2) 
const sorted = (a, b) => a-b;
// a-b: 오름차순
// b-a: 내림차순
// console.log(arr.sort());에 
// sorted 규칙변수를 넣으면 값이 작은 순서대로 정렬된다.
// 함수 파라메타 값이 들어가는 것이 고차함수이다. 
console.log(arr.sort(sorted));



// 사전 편찬순으로 진행함. 
const brr = ['aa', 'dd', 'ee', 'bb'];
console.log(brr.sort());