// push: 원본배열이 변경됨
// concat: 원본배열이 변경되지 않음

const arr = [1,2,3];
arr.push(4);
console.log(arr);

const result = arr.concat(5);
console.log(arr);

console.log(`result= `);
console.log(result);