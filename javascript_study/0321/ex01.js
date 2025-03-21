// filter 사용하는 방법
// const result = [10, 20, 30, 40].filter((item, index, arr) => {
//     console.log(`item: ${item}`);
//     console.log(`index: ${index}`);
//     console.log(`arr: ${arr}`);
//     return item >= 30;
// });
// console.log(result);

// splice 사용법
// const arr = [1,2,3,4,5];
// arr.splice(2, 1, 10, 20);
// console.log(arr); 

// splice, Math.min 사용법
function solution(arr) {
    const min = Math.min(...arr);

    const minIndex = arr.indexOf(min);
    arr.splice(minIndex, 1); // 가장 작은 겂 하나 삭제
    const answer = arr;

    if (answer.length == 0) return [-1];
    return answer;

}

// 가장 작은 수 제거하기 - filter, Math.min 사용
// function solution(arr) {
//     const min = Math.min(...arr)
//     const answer = arr.filter((item) => {
//         return item !== min;
//     })
//     if (answer.length == 0) return [-1];
//     return answer;
// }

console.log(solution([4, 3, 2, 1]));