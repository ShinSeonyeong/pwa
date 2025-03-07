// 프로그래머스 풀이
function solution(arr){
    const stk = [];

    for(let i=0; i<arr.length; i++){
        if(stk.length == 0){
            stk.push(arr[i]);
        }else if(stk[stk.length-1] == arr[i]){
            stk.pop();
        }else if(stk[stk.length-1] != arr[i]){
            stk.push(arr[i]);
        }
    }

    if(stk.length == 0){
        return [-1];
    }

    return stk;
}


// function solution(arr) {
//     var answer = [];
//     var stk = [];
//     var idx = 0;
    
//     if (stk.length === 0) {
//         answer.push(arr[idx]);
//         console.log(`arr[idx] ${arr[idx]}`);
//     }else if(arr.slice(-1) > 0){
//         answer
//     }
//     idx++;
//     console.log(`answer ${answer}`);
//     console.log(`arr[idx] ${arr[idx]}`);
// }

// solution([0, 1, 1, 1, 0]);