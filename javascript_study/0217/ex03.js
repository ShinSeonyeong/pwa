const name  = "홍길동";
const age = 20;

const person ={
    name,
    age: age
}

const person2 = {...person}; // = {name: '홍길동', age: 20};

person.name = "박길동"

console.log(person);
console.log(person2);