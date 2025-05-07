const bb = require("./bb.js").bb.c;
console.log(bb);

require("./bb.js").bb.ddd();

// env는 node안의 기본 라이브러리가 아님
const dotenv = require("dotenv").config();
console.log(dotenv);

console.log(process.env.aa);
console.log(process.env.bb);