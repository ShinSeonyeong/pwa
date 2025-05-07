// Map은 객체와 비슷하지만 프로터피로 함수를 넣을 수 있다.
const map = new Map();
map.set((()=>{}), 10);
map.set("aa", 10);
console.log(map);

// 배열과 비슷하지만 중복허용을 하지 않는다.
const set = new Set([1, 2, 3, 3, 3, 4, 5]);
console.log(set);
