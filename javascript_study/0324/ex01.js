/*
const arr = [1, 2, 3, 4, 5];
const brr = new Array(5).fill("0");

console.log(arr);
console.log(brr);

console.log(arr.slice(0, 3)); // [ 1, 2, 3 ]
console.log(arr.slice(0, -1)); // [ 1, 2, 3, 4 ]
console.log(arr.slice(-4, -1)); // [ 2, 3, 4 ]
*/

function solution(phone_number) {
    const fs = phone_number.slice(0, -4);
    // console.log(fs);
    const answer = new Array(fs.length).fill('*').join("");
    // console.log(answer);
    // console.log(phone_number.slice(-4));

    return answer + phone_number.slice(-4);

    // console.log(Object.getOwnPropertyDescriptors(answer));

    // const front_str = phone_number.slice(0, -4);
    // console.log(front_str);
    // var answer = new Array(front_str.lengt).fill('*').join("") + phone_number.slice(-4);
    // return answer;
}

console.log(solution("027778888"));