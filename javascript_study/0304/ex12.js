function solution(array) {
    answer = array.sort((a, b) => a - b);
    center = Math.floor(array.length / 2);
    console.log(answer[center]);

    return answer[center];
}

const res = solution([1, 2, 7, 10, 11])
console.log(res);