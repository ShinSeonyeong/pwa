// 문자열 string을 js object로 변경
// string -> object
// sesstionStorage, localStorage 사용할 때 JSon.parse() 사용

const aa = '{"a":"10", "b":"20"}';
const bb = {a: '10', b: '20'};

const obj = JSON.parse(aa);
console.log(obj);
console.log(obj.a);
console.log(obj.b);

const obj2 = JSON.stringify(bb);
console.log(obj2);