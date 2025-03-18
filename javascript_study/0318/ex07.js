var a = 10;
console.log(a);

class Car {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    drive(){
        console.log(`${this.name} ${this.type}`);
    }
    static doA(){
        console.log("정적 메서드 입니다.");
    }
}

const car = new Car('Toyota', 'hybrid');
console.log(car);
car.drive();

// car.doA(); // 생성된 참조 변수로는 정적에서도 호출 불가하다.
Car.doA();