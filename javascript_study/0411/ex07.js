// es5
// const oobj = { aa: 10, bb: 20 };
// const aa = oobj.aa;
// const bb = oobj.bb;

// console.log(aa);
// console.log(bb);

// es6
// 우변에 값이 없다면 a=10 기본값을 설정하여 넣겠다는 의미
const { aa: a=10, bb: b } = { bb: 20 };
// console.log(aa);
// console.log(bb);

console.log(a);
console.log(b);
