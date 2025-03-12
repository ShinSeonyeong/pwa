/*
1. aa(): this전역객체
strict mode일 때 this undefined로 할당됨
2. new aa(): this {} 생성하는 객체
3. person.aa(): person => this 
4. <tr onclick='aaa(this)'></tr> 여기에서 this는 trTag가 됨
5. 화살표함수의 this는 상위객체를 가리킨다.
*/

'use strict';
function AA(name) {
    console.log(this);
}

AA(); // 일반함수 호출
new AA("PARK") // new AA();

// aa가 this에 할당이 됨
const aa = {
    name: "LEE",
    getThis() {
        console.log(this);
    }
}

aa.getThis();

const bb = aa.getThis;
bb();