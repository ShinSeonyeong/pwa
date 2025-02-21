// 순수함수: 외부에 변화가 없는 것
// 순수함수를 더 많이 사용
function doA(n){
    return ++n;
}
const count = doA(3);
console.log(count); // 4

// 비순수함수: 외부에 변화가 생기는 것
// 매개변수도 없고, return되는 것도 없다. 
var n = 0;
function doB(){
    n++;
}
doB();
console.log(n); // 1