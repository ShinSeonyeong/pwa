const obj = {
    // constructor 생상자 호출시 prototype(개발자수정가능) 가지고 생성
    bar: function () { }, // 생성자 함수 사용가능, // [[construct]] [[call]] 있음

    foo() { }, // [[call]] 있음
    arrow: () => { }, // [[call]] 있음
    test: {} // [[construct]] [[call]] 없음
}

new obj.bar(); // [[construct]]
obj.bar(); // [[call]]

// new obj.foo(); // construct가 없기때문에 생성자 함수 호출 불가능
// obj.foo(); // 일반함수 호출가능

console.log(obj.foo.hasOwnProperty('prototype'));
console.log(obj.arrow.hasOwnProperty('prototype'));
console.log(obj.bar.hasOwnProperty('prototype'));


// new obj.arrow();
// new obj.test();