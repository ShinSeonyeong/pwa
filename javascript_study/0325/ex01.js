function solution(a, b, n) {
    let sum = 0;
    while (true) {
        sum = sum + Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + (n % a);
        if (n < a) break;
    }
    console.log(sum);
    return sum;
}

solution(2, 1, 20);
solution(3, 1, 20);

// function solution(a, b, n) {
//     var answer = n ;
//     var res = 0;
//     do{
//         answer = answer / a;
//         res += answer;
//         // console.log(res);
//     }while(res < b);
//     return Math.round(res)-1;
// }

// solution(2, 1, 20)