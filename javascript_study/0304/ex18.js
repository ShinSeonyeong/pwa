// const person1 = {
//     name: "홍길동",
//     age: 20,
// }

// const person2 = {
//     name: "백길동",
//     age: 20,
// }

function Person(name, age){
    this.name = name;
    this.age = age;
}
function aa(){}

const person1 = new Person('홍홍홍', 20);
const person2 = new Person('박박박', 25);
const person3 = new Person('김김김', 30);

console.log(person1 instanceof Person);
console.log(person1 instanceof aa);

function test(){}
test();
new test();
