// 상속관계 만들기
// 부모클래스(공통된 부분 작성)와 자식클래스(파생된 부분 작성)를 선언

class Phone {
    constructor(number, brand) {
        this.number = number;
        this.brand = brand;
        console.log(this);
    }
}

class SmartPhone extends Phone {
    constructor(number, brand, internet) {
        super(number, brand);
        this.internet = internet;
        console.log(this);
    }
}

// const phone = new Phone("010-9876-5432", "Samsung");
const smartphone = new SmartPhone("010-1234-5678", "Apple", true);

// console.log(phone);
// console.log(smartphone);

// console.log(Object.getPrototypeOf(phone));
// console.log(Object.getPrototypeOf(smartphone));