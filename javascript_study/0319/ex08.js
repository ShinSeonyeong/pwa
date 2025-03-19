class Person{
    name = "lee";
    getName = function(){ // 인스턴스 변수 선언, prototype에 있는 것이 아님
        return this.name;
    }

    aa(){} // prototype method
}

const me = new Person();
console.log(me);
console.log(me.getName());