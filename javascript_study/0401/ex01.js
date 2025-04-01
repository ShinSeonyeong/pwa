// 배열 뒤에 값을 넣음
const arr = [1, 2, 3, 4, 1, 1, 1, 1, 2, 2, 2, 2];
arr.push(1, 2);
console.log(arr); // [ 1, 2, 3, 4, 1, 2 ]

// 배열 앞에 값을 넣음
arr.unshift(-1, 0);
console.log(arr); // [-1, 0, 1, 2, 3, 4, 1, 2]

// 배열 뒤의 값을 가지고 나오는 것
const last = arr.pop();
console.log(last); // 2
console.log(arr); // [-1, 0, 1, 2, 3, 4, 1]

// 배열 앞의 값을 가지고 나오는 것
const first = arr.shift();
console.log(first); // -1
console.log(arr); //[ 0, 1, 2, 3, 4, 1 ]

arr.splice(2, 1); // index 2번에 해당하는 값을 1개 지움
console.log(arr); // [ 0, 1, 3, 4, 1 ]

// map은 배열의 내용을 바꿈.
const brr = arr.map((element) => {
    return `<li>${element * 2}</li>`;
})
console.log(brr);

console.log("-------------------------------");
// reduce는 배열을 한개의 자료형으로 변경
const obj = arr.reduce((a, b) => {
    console.log(a);
    console.log(b);
    a.name = "홍길동";
    // console.log(a[b]);
    a[b] = (a[b] == undefined ? 1 : a[b] + 1);
    return a;
}, {});
console.log(obj);