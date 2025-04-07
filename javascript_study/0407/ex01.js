console.log(Math.abs(-5));
console.log(2 ** 3);
console.log(Math.cbrt(27));

// 50~100 사이 난수 만들어달라.
// Math.trunc(): 소수 버리는 것
// console.log(Math.trunc(Math.random() * 50) + 50);
function getNumber(min, max) {
  return Math.trunc(Math.random() * (max - min)) + min;
}
for (let i = 0; i < 15; i++) {
  console.log(getNumber(1, 47));
}
