const str = "hello";
console.log(str.length);

const { length } = str;
console.log(length);

const arr = [1, 2, 3, 4];
// length로 둘 다 선언하면 오류기에 arrLength 선언해줘야 함. 
const { length: arrLength } = arr; 
console.log(arrLength);
