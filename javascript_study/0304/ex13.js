const outerVar = "전역"
function outer() {
    let outerVar = "외부 변수";
    return function inner() {
        // inner 함수는 자신이 선언된 시점의 스코프 체인을 통해 outerVar에 접근 가능
        outerVar = outerVar + '!';
        console.log(outerVar); // "외부 변수" 출력   
    }
}
const out = outer();
out();
out();
out();
out();

/*
const outerVar = "전역"
function outer() {
    let outerVar = "외부 변수";
    inner();
}

function inner() {
    // inner 함수는 자신이 선언된 시점의 스코프 체인을 통해 outerVar에 접근 가능
    console.log(outerVar); // "외부 변수" 출력
    
}
outer();
*/