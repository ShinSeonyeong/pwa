// // 프로그래머스: 점의 위치 구하기
// function solution(dot) {
//     console.log(dot[0]);
//     console.log(dot[1]);
//     if (dot[0] > 0 && dot[1] > 0) {
//         return 1;
//     } else if (dot[0] < 0 && dot[1] > 0) {
//         return 2;
//     } else if (dot[0] < 0 && dot[1] < 0) {
//         return 3;
//     } else if (dot[0] > 0 && dot[1] < 0) {
//         return 4;
//     }
// }

// const res = solution([2, 4]);
// const res2 = solution([-7, 9]);
// console.log(res);
// console.log(res2);

// 프로그래머스: 점의 위치 구하기
function solution(dot) {
    var x = dot[0];
    var y = dot[1];
    if (x > 0 && y > 0) return 1;
    else if (x < 0 && y > 0) return 2;
    else if (x < 0 && y < 0) return 3;
    else if (x > 0 && y < 0) return 4;
}

const res = solution([2, 4]);
const res2 = solution([-7, 9]);
console.log(res);
console.log(res2);