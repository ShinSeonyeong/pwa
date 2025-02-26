function doA() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const counter = doA();
console.log(counter); // [Function (anonymous)] (익명함수)

const value = counter();
console.log(value); // 1

console.log(counter());
console.log(counter());