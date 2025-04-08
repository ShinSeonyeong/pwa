const mysymbol1 = Symbol("본인꺼");
const mysymbol2 = Symbol("본인꺼");

console.log(mysymbol1 == mysymbol2); // 각각 유일한 값이기에 false값 나옴.
console.log(mysymbol1);
console.log(mysymbol2);

console.log(mysymbol1.description);

console.log(typeof mysymbol1);
console.log(typeof mysymbol2);

console.log(typeof mysymbol1);

const aa = {}; // 객체리터럴 방식으로 객체 생성
aa.aaa = 10;
console.log(aa);

String.prototype.aaa = 20;
let a = "abcdef";
console.log(String.prototype.aaa);

a = a.replace(/a/,"aaa");
console.log(a);
console.log(a.aaa);