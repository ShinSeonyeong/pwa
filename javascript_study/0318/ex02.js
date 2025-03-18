function Person(name, age) {
    this.name = name;
    let _age = age; // 캡슐화와 정보은닉

    this.sayHi = function(){
        console.log(`this.name ${this.name}, _age ${_age}`);
    }

    this.setAge = function(age){
        if(age<0){
            console.log("적용불가");
        }
        _age = age;
    }
}

const me = new Person('John Doe', 30);
me.sayHi(); // this.name John Doe, _age 30

const you = new Person('Jane Smith', 25);
you.sayHi(); // this.name Jane Smith, _age 25

console.log(`me.name = ${me.name}`); // me.name = John Doe
console.log(`me._age = ${me._age}`); // me._age = undefined