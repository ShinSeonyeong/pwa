// 콜라를 받기 위해 마트에 주어야 하는 병 수 a
// 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b
//  상빈이가 가지고 있는 빈 병의 개수 n

function solution(a, b, n) {
    var answer = n ;
    var res = 0;
    // console.log(b);
    // console.log(answer);
    do{
        answer = answer / a;
        res += answer;
        // console.log(res);
        console.log(Math.round(answer));
        console.log(Math.round(res));
    }while(res < b);
    return Math.ceil(res)-1;
    // answer += Math.round(answer);
    // console.log(answer);

    // console.log(answer);
    // for (let i = 0; ; i++) {
    //     answer = Math.round(answer) / a;
    //     console.log(answer);

    // }

    // var answer = n / a;
    // console.log(Math.round(answer));
    // console.log(n + '  ' + a);

    // var answer2 = answer / a;
    // console.log(Math.round(answer2));
    // console.log(n + '  ' + a);

    // var answer3 = answer2 / a;
    // console.log(Math.round(answer3));
    // console.log(n + '  ' + a);

    // var answer4 = answer3 / a;
    // console.log(Math.round(answer4));
    // console.log(n + '  ' + a);

    // var answer5 = answer3 / a;
    // console.log(Math.round(answer5));
    // console.log(n + '  ' + a);

    // var res = Math.round(answer) + Math.round(answer2) + Math.round(answer3) + Math.round(answer4) + Math.round(answer5);
    // console.log(res);

    // return Math.round(answer) - 1;
}

console.log(solution(2, 1, 20));