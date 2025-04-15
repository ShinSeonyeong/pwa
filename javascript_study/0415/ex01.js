const obj = {
  aa: 10,
};

const map = new Map();
map.set("aa", 10);

console.log(obj);
console.log(map);

obj.bb = 20;
obj.cc = () => {};
map.set({ aa: 10 }, 20);

console.log(obj);
console.log(map);

// 속성이 몇 개 있는지
console.log(Object.keys(obj));
console.log(Object.keys(obj).length); // 객체속성 값 확인
console.log(map.size);

console.log(...map);
// console.log(...obj); // obj는 ... 안됨. 객체는 {}로 감싸서 구해야 함.
console.log({...obj})
