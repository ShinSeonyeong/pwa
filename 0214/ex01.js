// null 병합 연산자

console.log(Boolean(""));
console.log(Boolean([]));
console.log(Boolean({}));

const a = "" || "기본문자열";

console.log(a);
console.log(a.length);

//str의 길이를 반환해주는 함수
function aa(str){
    str = str || '';
    return str.length;
}

console.log(aa());
console.log(aa('문자열'));