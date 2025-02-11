var a = 10/0;
console.log(a);

var b = "aa" / 5;
console.log(b);
console.log(typeof (b));

var c;
console.log(c);

console.log(typeof (a+''));

var d = "10";
console.log(Number(d)); //소수까지 살림
console.log(parseInt(d)); // 소수버림
console.log(+d); //숫자로 자동변환