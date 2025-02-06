// 문제: 양꼬치 
// n, k 임의의 숫자 제공
// n 12000원, 음료수 k 2000원
// 양꼬치 10개 먹으면 음료수(2000원) 한 개 공짜

function solution(n, k) {
    var total = 0;

    //12000원 * n은 양꼬치값
    var sheep = n * 12000;

    //2000원 * k는 음료수
    var drink = k * 2000;

    //total = 양꼬치값 + 음료수값
    total = sheep + drink;

    //양꼬치 10개 먹을 때마다 2000원씩 빼라
    total = total - (parseInt(n / 10) * 2000);
    
    return total;
}

const value = solution(10, 3);
console.log(value); //124,000

const value2 = solution(64, 6);
console.log(value2); //768,000