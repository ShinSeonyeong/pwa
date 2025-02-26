// 프로그래머스 아이스 아메리카노
// money	result
// 5,500	[1, 0]
// 15,000	[2, 4000]

function solution(money) {
    var answer = []; // answer[count, 남은돈]
    var price = 5500; // 한 잔의 가격
    var count = 0; // 주문한 잔의 수
    while (true) {
        if (money < price * count) {
            answer[0] = count - 1;
            answer[1] = money - (price * (count - 1));
            console.log(`count ${count}`);
            console.log(`price ${price}`);
            break;
        }
        count++;
        console.log(`price*count ${price * count}`);
    }
    return answer;
}

console.log(solution(5500));
console.log(solution(15000));