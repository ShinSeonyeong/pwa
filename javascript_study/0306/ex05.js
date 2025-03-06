// 프로토타입을 null 지정해서 obj 객체 생성
const obj = Object.create(null);
console.log(obj.__proto__);

const obj2 = {};
console.log(obj2.__proto__);
console.log(Object.getPrototypeOf(obj2));