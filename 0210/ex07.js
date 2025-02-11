// for문 2개 사용해서 배열 값 출력: [0~2, 1~3]
// i = 0~2, j = 1~3

// for (var i = 0; i < 3; i++) {
//     for (var j = 1; j < 4; j++) {
//         console.log(`[${i},${j}]`);
//     }
// }

// Q1: i = 2~4, j = 1, 3, 5
// for (var i = 2; i < 5; i++) {
//     for (var j = 1; j < 6; j = j + 2) {
//         console.log(`[${j},${i}]`);
//     }
// }

var j = 1;
for (var i = 2; j < 4; j++) {
    console.log(`[${i},${j}] [${i+1},${j}] [${i+2},${j}]`);
}