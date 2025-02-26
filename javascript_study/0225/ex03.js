// // 배열 디스트럭처링
// const [a, b] = [10, 20];
// // 객체 디스트럭처링
// const { aa, bb, cc, dd } = { aa: 20, bb: 30, cc: function () { }, dd: {aaa:10} }
// console.log(a);
// console.log(bb);
// console.log(dd);
// console.log(dd.aaa);

const person = {};

Object.defineProperties(person, {
    firstName: {
        value: "Alice",
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: "Bob",
        writable: false,
        enumerable: false,
        configurable: false
    },
    fullName: {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(fn) {
            [this.firstName, this.lastName] = fn.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = "홍 길동";
console.log(person.fullName);

// delete person.firstName;
// delete person.lastName;

// person.firstName = "사랑";
// person.lastName = "홍";

// console.log(person.firstName);
// console.log(person.lastName);

// for (const key in person) {
//     console.log(key)
// }