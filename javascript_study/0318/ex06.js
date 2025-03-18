y = 20;

function A1(){
    this.a = 10;
    this.b = 20;
}

class A2{
    // 'use strict';
    doA(){
        // x = 10;
        console.log(this);
    }
}

A1(); // 일반함수 호출 가능
const a1 = new A1(); // 생성자 함수 호출 가능
for(const element in a1){
    console.log(element);
}

// A2(); // 일반함수 호출 불가능
const a2 = new A2(); // 생성자 함수 호출 가능
a2.doA();