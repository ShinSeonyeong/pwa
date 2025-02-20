// 프로그래머스: 삼각형의 완성조건


solution([3, 6, 2]);
// 1번 방법: for, if
// var answer = 0;
// var res;
// function solution(sides) {
//     var max_num = Math.max(...sides);
//     // console.log(max_num);
//     for (var i = 0; i < sides.length; i++) {
//         if (max_num != sides[i]) {
//             answer = answer + sides[i];
//             // console.log('sides[i] ' + sides[i]);
//             // console.log('answer ' + answer);
//         }
//     }
//     // console.log('max_num' + max_num);
//     // console.log('answer' + answer);

//     if (max_num == answer || max_num > answer) {
//         console.log('max_num 1=' + max_num);
//         console.log('answer 1=' + answer);
//         res = 2;
//         console.log('res' + res);
//         // console.log(res);
//     } else {
//         console.log('max_num 2=' + max_num);
//         console.log('answer 2=' + answer);
//         res = 1;
//         console.log('res' + res);
//         // console.log(res);
//     }
// }

// solution([3, 6, 2]);