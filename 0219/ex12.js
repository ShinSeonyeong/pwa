// 프로그래머스 삼각형

function solution(sides) {
    for (var i = 0; i < sides.length; i++) {
        if (sides[i] > sides[0])
            console.log(sides[i]);
    }
}

solution([12, 22, 223]);


// 이런식으로 0은 1, 2와 비교하고
// 1은 0, 2와 비교하고
// 2는 0, 1과 비교하고
// 그 중 가장 큰 값을 찾아야 함.
// var max0 = sides[0];
// var max1 = sides[1];
// var max2 = sides[2];
// if(max0 > max1){
//     var maxValue = max0;
//     console.log(maxValue);
// }else if(max0 > max2){
//     var maxValue = max0;
//     console.log(maxValue);
// }    ...
// console.log(max0);
// console.log(max1);
// console.log(max2);