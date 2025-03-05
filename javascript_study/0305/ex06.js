function arg() {
    // 유사배열 객체를 배열객체로 만드는 방법
    // Array.protoype.slice.call 사용해야함
    console.log(arguments)
    const test = Array.prototype.slice.call(arguments, 0, 2);
    console.log(test);
}

arg(10, 20, 30, 40, 50);
// [10, 20, 30, 40, 50].slice(0, 3);