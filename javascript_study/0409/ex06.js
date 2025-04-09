const arr = [1, 2, 3]; // Array.prototype.[symbol.iterator] 자동으로 구현되어져 있음

const iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

