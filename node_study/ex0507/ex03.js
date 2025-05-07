// 정적추가
const obj = {
  a: 10,
  b: function () {
    console.log("test");
  },
  c() {
    console.log("ccc");
  },
};

obj["asdf"] = "Asdf"; // 동적추가
console.log(obj.a);
obj.b();
obj.c();
console.log(obj.asdf);
