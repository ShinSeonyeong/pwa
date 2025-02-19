var res = (function (){
    var x = 5;
    var y = 7;
    // return x+y;
    return function(){
        console.log(x+y);
    }
})();

res();

console.log(res);
const a = 10;

console.log(typeof res);
console.log(typeof a);