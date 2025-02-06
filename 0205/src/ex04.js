<<<<<<< HEAD
// 정수 n
// n 이하의 짝수를 모두 더한 값을 리턴

function solution(n) {
    var total = 0;
    
    for( var i = 0; i <= n; i = i + 2){
    console.log(i);
    total = total + i;
    }

    return total;
}

const value = solution(10);
console.log(value);

const value2 = solution(4);
=======
// 정수 n
// n 이하의 짝수를 모두 더한 값을 리턴

function solution(n) {
    var total = 0;
    
    for( var i = 0; i <= n; i = i + 2){
    console.log(i);
    total = total + i;
    }

    return total;
}

const value = solution(10);
console.log(value);

const value2 = solution(4);
>>>>>>> c7ee53fae828b1a2eedf351355e954ebabb5db24
console.log(value2);