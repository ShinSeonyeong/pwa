function solution(num_list) {
    var answer = ''
    var answer2 = ''
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0){
            answer += num_list[i].toString()
            console.log(answer);
        }else{
            answer2 += num_list[i].toString()
            console.log(answer2);
        }
    }
    console.log(Number(answer) + Number(answer2))
    return Number(answer) + Number(answer2);
}

solution([5, 7, 8, 3])