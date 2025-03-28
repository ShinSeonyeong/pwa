// 1. for구문 2. forEach 3. map

const numbers = [1, 2, 3];
const pows = [];
// for구문
for (let i = 0; i < numbers.length; i++) {
    // console.log(i);
    // console.log(numbers[i]);
    pows.push(numbers[i] ** 2);
}
console.log(pows);

// length properties 사용해서 반환값 0으로 초기화
pows.length = 0;

// forEach()는 반환값이 없다. 
const result = numbers.forEach(item => {
    // console.log(item);
    pows.push(item ** 2);
})
console.log(pows);
console.log(`result = ${result}`);

// map() return값 사용해야 한다.
const pows1 = numbers.map(item => {
    return item ** 2;
})
console.log(pows1);