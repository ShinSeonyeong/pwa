const obj = {
    aa: function () { }, // 일반함수
    bb() { }, // 메서드축약함수
    cc: () => { } // 화살표함수
}

new obj.aa(); // 실행됨
// new obj.bb(); // 실행안됨
// new obj.cc(); // 실행안됨

console.log(obj.aa.hasOwnProperty('prototype')); // true
console.log(obj.bb.hasOwnProperty('prototype'));  // false
console.log(obj.cc.hasOwnProperty('prototype'));  // false