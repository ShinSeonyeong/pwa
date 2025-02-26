var a = {a: 10, b: 20};
var b = a.b;
var c = a.c;

console.log(`1. b= ${b}`);
console.log(`2. c= ${c}`);

a.c = {aa: 30, bb: 40};

console.log(a);

c = a.c?.aa;
console.log(`4. c= ${c}`);

a.c = null;
c = a.c?.aa;
console.log(`5. c= ${c}`);