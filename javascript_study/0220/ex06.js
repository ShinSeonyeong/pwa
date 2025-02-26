// forEach 반환값 없는 것
// const result1 = [1, 2, 3].forEach((item, index, arr, q, w) => {
//     console.log("화살표함수 forEach " + item);
//     console.log(`index=${index}`);
//     console.log(`arr=${arr}`);
//     console.log(`q=${q}`);
// });
// 
// console.log(result1);

// map 반환값 있는 것
// const result2 = [1, 2, 3].map((qwer, index, arr, q, w) => {
//     console.log("화살표함수 map " + qwer);
//     console.log(`index=${index}`);
//     console.log(`arr=${arr}`);
//     console.log(`q=${q}`);
//     return qwer*2;
// });
const result2 = [1, 2, 3].map(qwer => qwer*2);
console.log(result2);