// es5버전
// const value2 = 10;
// const func2 = () => {
//   console.log("test");
// };
// const obj2 = { a: 10, b: 20 }

// es6버전
const [value, func, obj] = [
  10,
  () => {
    console.log("test");
    obj.b = 30;
  },
  { a: 10, b: 20 },
];

console.log(value);
console.log(func);
console.log(obj);

func();
console.log(obj);
