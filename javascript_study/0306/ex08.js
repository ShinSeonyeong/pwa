function solution(arr) {
    var answer = [];
    var stk = [];
    var idx = 0;
    
    if (stk.length === 0) {
        answer.push(arr[idx]);
        console.log(`arr[idx] ${arr[idx]}`);
    }else if(arr.slice(-1) > 0){
        answer
    }
    idx++;
    console.log(`answer ${answer}`);
    console.log(`arr[idx] ${arr[idx]}`);
}

solution([0, 1, 1, 1, 0]);