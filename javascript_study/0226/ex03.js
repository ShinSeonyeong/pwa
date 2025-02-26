function person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
        return `이름: ${this.name} 나이: ${this.age}`;
    }
}

const p1 = new person('홍길동', 20);
console.log(p1);
console.log(p1.print());

const p2 = new person('선길동', 30);
console.log(p2);
console.log(p2.print());