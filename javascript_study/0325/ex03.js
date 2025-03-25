// 성능테스트 
// ex) 슈파베이스에 성능테스트 해본 것 정리
console.time("for arr");

let sum = 0;
for (let i = 0; i < 1000000; i++) {
    sum = sum + i;
}
console.log(sum);

console.timeEnd("for arr");

// --------------------------------------------------------

console.time("for arr test");

let arr = [];
for (let i = 0; i < 1000000; i++) {
    arr[i] = i;
}
console.timeEnd("for arr test");

// --------------------------------------------------------

console.time("for obj test");

let obj = {};
for (let i = 0; i < 1000000; i++) {
    obj[i] = i;
}
console.timeEnd("for obj test");