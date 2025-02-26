// Q. 모든 요소에 2를 곱하고, 짝수들의 총합을 구해라

// 2번방법: map, filter 사용
const numbers = [1, 2, 3, 4, 5, 6];
const result =
    numbers.map(item => item * 2) // 1-1
        .filter(item => item % 2 == 0) // 1-2
        .reduce((acc, num) => acc + num); // 1-3
console.log(result); // [ 2, 4, 6, 8, 10, 12 ]

// 1번방법: for문
// const numbers = [1, 2, 3, 4, 5, 6];
// var sum = 0;

// 1-1
// for (var i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] * 2;
// }
// console.log(numbers);

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) { // 1-2
//         sum = sum + numbers[i]; // 1-3
//     }
// }
// console.log(sum);