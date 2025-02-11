// function solution(num_list) {
//     for (var i = 0; i < parseInt(num_list.length); i++){
//         var result = num_list;
//         var max_num = Math.max(result);
//         console.log(result[]);
//     }
//
//     return num_list;
// }
//
// solution([1, 2, 8, 4, 5]);

const a = [0, 31, 100, 10, 1, 9];
var answer = a[0];
for (let i = 1; i < a.length; i++) {
    // console.log(a[i]);
    if(answer<a[i]){
        answer = a[i];
    }
}

console.log(answer);

// const ret = Math.max(...a);
// console.log(ret);
//
// console.log(a);
// console.log(...a);
//
// const [k, y, z] = [...a];
// console.log(k);
// console.log(y);
// console.log(z);