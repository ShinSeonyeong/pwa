const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.add(10));

set.add(6).add(6).add(6);

console.log(set.delete(3));

set.delete(6).delete(6).delete(6);

console.log(set);

console.log(NaN === NaN);
// console.log(NaN.isNaN(NaN));
set.add(NaN);
set.add(NaN);

console.log(set);

set.delete(NaN);
console.log(set);

set.clear();
console.log(set);

[1, 2, NaN, 3];
