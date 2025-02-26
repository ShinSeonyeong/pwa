const a = ("큰 따옴표 안에 '작은따옴표'");

console.log(a);

const b = ('작은 따옴표 안에 "큰 따옴표"');

console.log(b);

const c = `a=${a} 
    b=${b}`;
console.log(c);

const d = "a="+a+" \t b="+b;
console.log(d);

