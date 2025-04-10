const obj = { a: 10, b: 20 };
const copy = obj;
const copy2 = copy;

// 원시타입은 복사가 됨
const a = 10;
const b = a;

obj.a = 30;
console.log(obj);
console.log(copy);
console.log(copy2);
