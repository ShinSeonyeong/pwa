const person = {
    name: "홍길동",
    age: 30,
    addr: "대구"
}

// in: 프로토타입체인 안에 있는 것, true, false 체크해줌. 
// 객체 안에 데이터프로퍼티 검사함. in을 주로 사용함. 
console.log('name' in person);
console.log('age' in person);
console.log('addr' in person);

console.log('phone' in person);

console.log('toString in Object.prototype');
console.log('toString' in Object.prototype);
console.log('toString in person');
console.log('toString' in person);

// writable: 변경가능한, configuable: 삭제가능한

for (const key in person) {
    console.log(key);
}