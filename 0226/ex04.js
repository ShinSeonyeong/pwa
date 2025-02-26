function foo() {
    console.log(this);
    console.log(this.name);
}

// foo();

const obj = {
    name: '홍길동',
    foo
}
// obj.foo(); // 메서드로 호출
new foo(); // new 생성자 함수로 호출
// console.log(obj);
// globalThis.setInterval(function(){
//     console.log('test');
// }, 1000);

// var a = 10;
// console.log(a);
// console.log(window.a);
// console.log(globalThis);