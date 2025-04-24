console.log("Test01번");
const test = await fetch("https://github.com/dron512/pwa/blob/main/test.html");

const res = await test.text();
console.log(res);

console.log("실행되는지 테스트");
// console.log(test);

async function doA() {
  return "test";
}
console.log(doA());
