function solution(price) {
    var res = 0;

    if (price >= 100000 && price < 300000) {
        res = price - (price * 0.05);
        console.log(res);
    } else if (price >= 300000 && price < 500000) {
        res = price - (price * 0.1);
        console.log(res);
    } else if (price >= 500000){
        res = price - (price * 0.2);
        console.log(res);
    } else if(price < 100000){
        res = price;
    }
    return Math.floor(res);
}

solution(580000);