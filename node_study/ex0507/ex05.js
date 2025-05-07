const obj = {
  a: 10,
  b: {
    c: 30,
  },
  ccc() {
    console.log("ccc");
  },
};

// const a = obj.a;
// const c = obj.b.c;
// const ccc = obj.ccc;

// 객체분해, 위 방법과 동일하게 사용가능
const { a, b:{c}, ccc} = obj;

console.log(a);
console.log(c);
ccc();