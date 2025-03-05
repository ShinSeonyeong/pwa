function solution(price) {
    var answer = 0;
    if ( 100000 <= price < 300000) {
        answer = price * 0.05;
        console.log(answer);
        answer = price - answer;
        console.log(answer);
    } else if ( 300000 <= price < 500000) {
        answer = price * 0.1;
        answer = price - answer;
    } else if (price >= 500000) {
        answer = price * 0.2;
        answer = price - answer;
    }else{
        answer = price;
    }

    // console.log(answer);
    return answer;
}

solution(580000);