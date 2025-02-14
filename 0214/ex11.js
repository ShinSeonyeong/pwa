// 순서쌍의 개수
function solution(n) {
    var count = 0;
    for (var i = 1; i <= n; i++) {
        var answer = n;
        var num = answer / i;
        if (num % 1 == 0) {
            count = count + 1;
        }
    }
    
    console.log(count);
}

solution(20);
solution(100);

// num * num = answer;
// 1*20 = 20
// 2*10 = 20
// 4*5 = 20
// 5*4 = 20
// 10*2 = 20
// 20*1 = 20