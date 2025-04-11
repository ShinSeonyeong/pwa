let a, b;

[a, b] = [10, 20];

// b와 a값을 바꿔라
[b, a] = [a, b];

console.log(`a=${a}`);
console.log(`b=${b}`);

// temp 사용해서 값을 바꿔줌. 
let c = 40;
let d = 50;

let temp = c;
c = d;
d = temp;

console.log(`c=${c}`);
console.log(`d=${d}`);
