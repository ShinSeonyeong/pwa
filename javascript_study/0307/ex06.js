// const Person = (function () {
//     function Person(name) {
//         this.name = name;
//     }
//     Person.prototype.sayHello = function () {
//         console.log(`나는 프로토타입 ${this.name}`);
//     }
//     return Person;
// })();

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`나는 프로토타입 ${this.name}`);
}

const me = new Person("Park");

me.sayHello = function () {
    console.log(`나는 인스턴스 ${this.name}`);
}
me.sayHello();

delete me.sayHello;
me.sayHello();

Person.prototype.sayHello = function () {
    console.log(`나는 new 프로토타입 ${this.name}`);
}
me.sayHello();

delete Person.prototype.sayHello;
me.sayHello();