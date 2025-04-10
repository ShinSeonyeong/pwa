const obj = { a: 10, b: 20 };
// ...obj가 없었을 땐 {a:obj.a, b:obj.b}의 원시복사방법을 사용했다.
const copy = {...obj};

obj.a = 30;

console.log(obj);
console.log(copy);
