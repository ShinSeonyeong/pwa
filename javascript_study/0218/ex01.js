function solution(num_list) {
    var answer = [];
    for (let i = 0; i < num_list.length; i++) {
        // console.log(num_list[i]);
        if (num_list[i] % 2 == 0) {
            answer[0] = answer[0] ?? 0;
            answer[0] = answer[0] + 1;
            console.log(`answer=${answer[0]}`);
        }else{
            answer[1] = answer[1] ?? 0;
            answer[1] = answer[1] + 1;
            console.log(`answer=${answer[1]}`);
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1,3,5,7]));