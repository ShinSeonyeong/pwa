class Animal{
    constructor(){
        this.a = 10;
        this.doB = ()=>{console.log("doB")};
        console.log("Animal");
    }
    doA(){
        console.log("Animal doA()");
    }
}

class Dog extends Animal{
    constructor(){
        super();
        this.b = 30;
        console.log("Dog");
    }
}

const dog = new Dog();
console.log(dog);

dog.doA();