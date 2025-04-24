function doA() {
  console.log("doA");

  for (let i = 0; i < 1000_000_000_000; i++) {}
}

function doB() {
  console.log("doB");
}

console.log("시작");

setTimeout(doA, 3000);
doB();

console.log("종료");
