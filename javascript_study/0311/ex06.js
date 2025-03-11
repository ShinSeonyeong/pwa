// 객체값이기에 Number.prototype안에 있는 toFixed()함수 사용 가능
// aa는 Number.prototype, Object.prototype 사용 가능.
const aa = new Number(123.55);

const result = aa.toFixed(); // toFixed(): 반올림해서 문자열로 변환
console.log(result);
console.log(typeof result);

// js에서 원시값을 연관된 객체로 변환해주기에 toFixed()함수 사용가능
const bb = 123.84;
console.log(bb.toFixed());