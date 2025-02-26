function test(b, obj) {
    b = 20;
    obj.name = "김"
    console.log(`obj = `);
    console.log(obj);
    
}
var a = 10;
var person = { name: "홍" };
var p2 = {...person}

console.log(a);
console.log(person);

test(a, {...person});

console.log(a);
console.log(person);