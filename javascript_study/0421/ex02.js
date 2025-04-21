const obj = { a: 10, b: 20, c: 30 };
const map = new Map(Object.entries(obj));

console.log(map);

const mapToObj = Object.fromEntries(map);
console.log(mapToObj);
