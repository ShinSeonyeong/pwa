const person = {
    name: "홍길동",
    age: 30,
    addr: "대구"
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// 객체는 for in으로 순회
// 배열은 for of로 순회
for (const element of Object.keys(person)) {
    console.log(element);
}
for (const element of Object.values(person)) {
    console.log(element);
}
for (const element of Object.entries(person)) {
    console.log(element);
}
for (const [key, value] of Object.entries(person)) {
    console.log(`key ${key}`);
    console.log(`value ${value}`);
}

// 디스트럭처링 객체분해
const { aa, bb } = { aa: 10, bb: 20 };

const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);