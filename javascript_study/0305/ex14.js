function solution(array) {
    var answer = 0;

    for (var i = 0; i < array.length; i++) {
        console.log('=========================')
        console.log(array[i]);
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                console.log(`if문[i] = ${array[i]}`);
                console.log(`if문[j] = ${array[j]}`);
            }
        }
    }
    console.log(answer);

    return answer;
}

const res = solution([1, 2, 3, 3, 3, 4]);