// function Person(name){};

// const Person = name =>{
//     this.name = name;
// }

// console.log(Person.prototype);

class Person{
    constructor(){
        this.x = 10;
        this.y = 20;
        console.log("test");
    }
}

const p1 = new Person();
console.log(p1);