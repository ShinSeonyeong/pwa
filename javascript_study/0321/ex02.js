const foo = function () {
    return 1;
}

console.log(foo());

console.log(new foo());

// 일반함수
// const obj = { foo: function () { return 2 } };
const obj = {foo};
console.log(obj.foo());

// 메서드 축약 함수
const obj1 = { foo() { return 2 } };
console.log(obj1.foo());

// 화살표 함수
const obj2 = { foo: () => { return 2 } };
console.log(obj2.foo());