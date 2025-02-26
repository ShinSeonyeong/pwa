var a = NaN;
var b = NaN;

console.log(a);
console.log(a === b);

console.log(Number.isNaN(a));
console.log(Number.isNaN(b));

var c = {
    a: 10,
    b() {
        // for(; ;){
        //     console.log(this.a);
        // }
        console.log("b함수입니다.");
    },
    c:{a:1}
}

c.b();
console.log(c.c.a);