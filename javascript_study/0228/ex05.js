const obj = {
    age: 20,
    name: '홍길동',
    get fullName() {
        return `이름 ${this.name} 나이 ${this.age}`;
    }
}
console.log(obj.toLocaleString());
console.log(obj.hasOwnProperty('name'));
// console.log(Object.getOwnPropertyDescriptors(obj));


// 내부슬롯 [[prototype]] 제공
function aa(num, num) {
    console.log('test');
}
// console.log(aa.length);
// console.log(aa.prototype);
// console.log(aa.[[prototype]]); // SyntaxError: Unexpected token '['
// __proto__로 작성해줘야 함.
// console.log(aa.__proto__);

// console.log(Object.getOwnPropertyDescriptors(aa));

// console.log("------Object.prototype------");
// console.log(Object.prototype);
// console.log("-------Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'-----");
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'))