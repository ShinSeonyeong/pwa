const str1 = "1234";
const str2 = "abcd";
const str3 = "12cd";

const re = /[\d]+/; // 숫자가 하나라도 포함되어 있는지?
const re2 = /^\d+$/;

console.log(re.test(str1));
console.log(re.test(str2));
console.log(re.test(str3));

console.log(re2.test(str1));
console.log(re2.test(str2));
console.log(re2.test(str3));
