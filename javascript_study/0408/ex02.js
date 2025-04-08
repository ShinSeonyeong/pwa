const ss = Symbol();
if (ss) {
  console.log("Symbol true");
}

const aa = "asd";
const bb = "";

if (aa) {
  console.log("aa true");
}

if (bb) {
  console.log("bb true");
}

const cc = {};
if (cc) {
  console.log("{} true");
}

const dd = cc || "false면 dd";
console.log(dd);