// const arr = [0];
// arr[100] = 100;

// console.log(Object.getOwnPropertyDescriptors(arr));
// console.log(arr);


const brr = [1, 2, 3, 4];

const remove = brr.splice(1, 2); // index 1번부터 2개 삭제
console.log(`remove ${remove}`);
console.log(brr);

// 아래의 방법은 좋지 않은 방법
// delete brr[1];

// console.log(brr);
// console.log(brr.length);