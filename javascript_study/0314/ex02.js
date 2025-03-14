/* 
**this 종류**
전역 / 일반함수 / 메서드 / 생성자
*/

// 'use strict';
// console.log(this);

function aa(){
    console.log(this);
    // console.log(this.crypto.randomUUID());
}
aa();

// const obj = {
//     a: 10,
//     doa(){
//         console.log(this);
//         console.log(`a ${this.a} `);
//     }
// }

// obj.doa();

// function aaa(){
//     console.log(this);
//     this.name = "name";
// }
// const a1 = new aaa();
// console.log(a1);

class AA{
    constructor(){ // 생성자함수
        console.log(this);
        this.name = "my name";
        // return this;
    }
}
const a2 = new AA();
console.log(a2);