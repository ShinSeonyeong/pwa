const person = {
    name: 'LEE',
    addr: { city: 'seoul' },
    friends: { name: 'Park', addr: { city: "busan" } }
};

// 추가X, 삭제O, 프로퍼티 값변경 O
// Object.preventExtensions(person);

// 추가X, 삭제X, 프로퍼티 값변경 O, configuable: false
// Object.seal(person);

// 추가X, 삭제X, 프로퍼티 값변경 X, configuable: false, writable: false
Object.freeze(person);
Object.freeze(person.addr);
Object.freeze(person.friends.addr);

person.addr.city = 'jeju';
console.log(person);

// person.age = 20;
// console.log(person);

// person.name = "PARK"
// console.log(person);

// const ret = Object.isExtensible(person);
// console.log(ret);