// const a ="abcdef";
//
// const b = a.indexOf('f');
// console.log(b);

function solution(str1, str2) {
    const test = str1.indexOf(str2);
    console.log(test);
    if (test === -1) {
        return 2;
    }else{
        return 1;
    }
}

const res = solution('ab6CDE443fgh22iJKlmn1o', '6CD');
console.log(res);