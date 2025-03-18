function solution(numbers) {
    let answer = [];
    const myset = new Set(); //중복제거해줌
    for (let i = 0; i < numbers.length; i++) {
        const a = numbers[i];
        for (let j = 0; j < numbers.length; j++) {
            const b = numbers[j];
            if (i != j) {
                // answer.push(a + b);
                myset.add(a + b);
            }
        }
    }
    answer = [...myset];
    answer.sort((a, b) => a - b);
    return answer;
}

console.log(solution([2, 1, 3, 4, 1]));