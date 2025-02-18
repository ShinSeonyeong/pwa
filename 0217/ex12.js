// 프로그래머스 짝/홀 개수구하기
function solution(num_list) {
    var even_count = 0;
    var odd_count = 0;
    for (var i = 0; i <= num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even_count = even_count + 1;
            console.log(num_list[i]);
            console.log(`even_count ${even_count}`);
        }
        if (num_list[i] % 2 === 1) {
            odd_count = odd_count + 1;
            console.log(`odd_count ${odd_count}`);
        }
    }
    console.log(`even_count ${even_count}`);
    console.log(`odd_count ${odd_count}`);
    var answer = [even_count, odd_count];
    return answer;
}

solution([1, 3, 5, 7]);