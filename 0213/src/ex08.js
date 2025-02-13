// 세균증식 - 프로그래머스 문제풀이
function solution(n, t) {
    for (var i = 1; i <= t; i++) {
        if(i === 1) {
            var answer = 2 * i;
            console.log(`${answer} = 2 * ${i}`);
        }
        var n = n * answer;
        console.log(`${n} = ${n} * ${answer}`);
    }
    var result = n;
    console.log(n);
}

solution(7, 15);

// answer = answer * n
// 4 = 2 * 2
// 8 = 4 * 2
// 16 = 8 * 2
// 32 = 16 * 2
// 64 = 32 * 2
// 128 = 64 * 2
// ...

// 2) return 값 넣었는데 뭔가 이상한 함수..
// function solution(n, t) {
//     for (var i = 1; i <= t; i++) {
//         if(i === 1) {
//             var answer = n * i;
//         }
//         var n = answer * n;
//     }
//     var result = n;
//     return result;
// }