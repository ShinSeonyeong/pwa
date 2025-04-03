const str = "abc-def";

console.log(str.substring(1, 4));
console.log(str.slice(1, 4));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const aa = "  bb  d";
console.log(aa);
console.log(aa.trim());

// i: 대소문자구분없이 
// g: 모든 곳에서 사용가능
// m: 여러라인에서 사용가능
const cc = " a b c d e f";
console.log(cc.replace(/\s/g, ""));
console.log(cc.replaceAll(' ', ""));
