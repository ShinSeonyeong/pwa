function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Person.prototype.greet = function () {
//     console.log(`hello 나는 ${this.name}, 나이는 ${this.age}`);
// }

Person.prototype = {
    greet(){
        console.log(`hello 나는 ${this.name}, 나이는 ${this.age}`);
    }
}

const p1 = new Person("홍길동", 20);
const p2 = new Person("이길동", 20);

// p1.greet();
// p2.greet();

console.log(p1.constructor);
console.log(p2.constructor);