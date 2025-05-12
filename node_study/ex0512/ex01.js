const path = require("path");

console.log(path.join(__dirname, "b", "c", "d")); // 현제 디렉토리 경로
console.log(path.extname("ex01.js")); // 확장자
console.log(path.basename("ex01.js")); // 파일 이름
console.log(path.dirname("ex01.js")); // 디렉토리 이름
console.log(path.parse("ex01.js"));

const { ext, name } = path.parse("ex01.js");

const fileName = `${name}-${Date.now()}${ext}`;
console.log(fileName); // ex01-1697031952000.js
console.log(path.join(__dirname, "images", fileName)); // 현재 디렉토리 + images + ex01-1697031952000.js
