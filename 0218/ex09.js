function add(x, y) {
    // 만약에 number가 아니면
    if (typeof x !== 'number') {
        // 에러를 강제로 발생시키는 것
        // throw new TypeError("x y는 숫자여야 합니다.")
        x = 0;
    }
    // 만약에 y가 number가 아니면
    if (typeof y !== 'number') {
        y = 0;
    }
    return x + y;
}

console.log(add(2));
console.log(add('a', 'b'));

console.log("끝까지 진행");