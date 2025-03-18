class Person{
    #age; // 접근이 허용되지 않음
    // #: Person 클래스 내부에서는 사용이 가능
    // #: 외부에서 접근하는 순간 에러 발생
    constructor(name, age){
        this.name = name;
        this.#age = age; // private
    }
    sayHi(){
        console.log(`this.name ${this.name}, this.#age ${this.#age}`);
    }
}

const me = new Person('John', 25);
me.sayHi(); // this.name John, this.#age 25

console.log(me.name); 
// console.log(me.#age); // 접근허용하지 않았기에 에러발생