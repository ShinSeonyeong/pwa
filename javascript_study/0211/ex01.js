// 1. reverse로 배열 역순으로 만드는 방법
// var a = [1,2,3,4,5];
// a.reverse();
// console.log(a);
//
// var b = [1,2,3,4,5,6];
// b.reverse();
// console.log(b);
//
// 코드실행문
// function solution(num_list) {
//     var reverse_list = num_list.reverse();
//     return reverse_list;
// }

// 2. temp 활용해서 바꾸는 방법
// var a = 10;
// var b = 20;
//
// var temp = a;
//
// a = b;
// console.log(a);
// console.log(b);
// console.log(temp);

// 길이가 8이면 2로 나누었을 때 4인데, 4번 바꾸면 됨.
// 길이가 5이면 2로 나누었을 때 2.5인데, 2번 바꾸면 됨.->parseInd() 사용하기
// 길이가 6이면 2로 나누었을 때 3인데, 3번 바꾸면 됨.

// 1번이랑 4번 바꿈
// num_list[1] = num_list[num_list.length - 2];

// 2랑 3이랑 바꿈
// num_list[2] = num_list[num_list.length - 3];

function solution(num_list) {
    for (var i = 0; i <= parseInt(num_list.length / 2); i++){
        var temp = num_list[i];
        num_list[i] = num_list[num_list.length - (i + 1)];
        num_list[num_list.length - (i + 1)] = temp;
    }
    console.log(num_list);
    return num_list;
}

solution([1,2,3,4,5,6]);