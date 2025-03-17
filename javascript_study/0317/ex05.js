const regex = /\d{3}-d{3}-d{4}$/;
console.log(regex.test("1231231ad6")); // true
console.log("123 abc 456 aa 789".match(regex)); // ["123"]