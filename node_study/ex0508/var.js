const odd = "홀수입니다.";
const even = "짝수입니다.";
const aa = () => {
  console.log("aa");
};

console.log("var.js");

// module 사용방법
// export const name = 'test';
// export const age = ()=>{};


// 객체 축약표현
// odd:"홀수입니다." 와 odd:odd 같은 출력결과 나옴
// commonjs 사용방법
module.exports = {
  odd,
  even,
  aa,
};

// module.exports = () => {
//   console.log("함수보냄");
// };
