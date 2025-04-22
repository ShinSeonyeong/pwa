// 최대값 만들기(2)
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값 완성
function solution(numbers) {
    var answer = 0;
    var answer2 = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] !== numbers[j]) {
                answer = numbers[i] * numbers[j];
                if (Math.sign(answer) === 1) {
                    answer2 = Number(answer.toString().split().sort((a,b)=>b-a).join(''));
                    console.log(answer2);
                }
            }
        }
    }
}

solution([0, -31, 24, 10, 1, 9]);