const arr = [1, 2, 3];
const brr = [4, 5, 6];
console.log(arr + brr);
console.log([...arr, ...brr]); // 스프레드 문법 사용해서 합칠것.
console.log("=====================");

console.log(...[1, 2, 3]);
console.log(..."hello");
console.log("=====================");

// length 프로퍼티 X, Symbol.iterator X
const obj = { a: 1, b: 2 };
console.log(obj.a);
console.log(obj.b);

// map 사용하면 length 프로퍼티 O, Symbol.iterator O
const map = new Map([["a", 1], ["b", 2]]);

console.log(map);
console.log(...map);
console.log("map에서 a로..." + map.get("a"));
console.log("map에서 b로..." + map.get("b"));
console.log("=====================");

const set = new Set([1, 2, 3]);
console.log(set);
console.log(...set);

const t1 = { a: 1, b: 2 };
const t2 = { a: 3, b: 4, c: 5 };

const result = { ...t1, ...t2 };
console.log(result);
console.log({ ...{ a: 1, b: 2 } });
