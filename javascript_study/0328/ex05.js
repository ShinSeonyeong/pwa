// fillter() 함수 사용해서 1,3,5 나오게 하기

const arr = [1, 2, 3, 4, 5];

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

// return true면 item 반환, false이면 반환하지 않음
// 반환된 것을 배열로 만들어 줌.
const brr = arr.filter((item) => {
    console.log(`item: ${item}`);
    return !(item % 2);   // 나머지 0이거나 1
});
console.log(brr);