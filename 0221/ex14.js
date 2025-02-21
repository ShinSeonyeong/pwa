// 프로그래머스, 머쓱이보다 키 큰사람 몇 명인지?

function solution(array, height) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > height){
            console.log(array[i]);
            count += 1;
        }
    }
    console.log(count);
}

solution([149, 180, 192, 170], 167);

// 167보다 더 큰 사람은 3명