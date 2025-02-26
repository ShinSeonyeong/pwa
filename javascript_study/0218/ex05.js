// 1번
(function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}())

// 1-2번
const test = function (x, y) {
    return x + y + 10;
};
test(1,2);

// 2번
var add1 = (function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());

console.log(add1(1, 2));