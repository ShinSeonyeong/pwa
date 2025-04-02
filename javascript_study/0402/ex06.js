const str = "abc456@naver.comr";
const re = /[\w]+@[A-Za-z]+.[A-Za-z]+/;

const arr = str.match(re);
console.log(arr);

console.log(re.test(str));