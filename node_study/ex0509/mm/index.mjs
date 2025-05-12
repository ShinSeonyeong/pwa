console.log("import 구문이 밑에 있음");

// if (true) {
    // if문안에 import 넣으면 안되고, 제일 위에 선언해야 함.
  import AA, { aa, bb, ccFunc } from "./var.mjs";
// }
console.log("AA", AA);
console.log("aa", aa);
console.log("bb", bb);
console.log("ccFunc", ccFunc);
console.log("실행");
