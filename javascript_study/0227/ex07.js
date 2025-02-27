const name = "홍길동";

const incr = function (num) {
    return ++num;
}
const decr = function (num) {
    return --num;
}

const auxs = {
    name,
    incr,
    decr
};

function makeCounter(aux) {
    let num = 0;
    return function () {
        num = (function () {
            num = aux(num);
            return num;
        });
    }
}

const increaser = makeCounter(auxs.incr);
// const increaser = makeCounter(function(num){return num;});
console.log(increaser);
console.log(`increaser ${increaser}`);

// console.log(incr(10));
// console.log(auxs.decr(10));