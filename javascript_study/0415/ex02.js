// map은 키 값이 같으면 덮어씌워진다.
const map = new Map();

// map은 키와 값의 쌍으로 이루어진다.
map.set("key1", "value1");
map.set("key1", "aaaa");
console.log(map);

const obj = { aa: 10 };
obj.aa = 20;
console.log(obj);

// 속성값이 중복되면 덮어씌워진다. aaaa만 출력하게 됨.
// forof 구문은 Symbol.iterator 구현되어 있어 정상작동되고,
// 키와 값이 배열로 출력된다.
for (const element of map) {
  console.log(element);
}
map.forEach((value, key) => {
  console.log(`value=${value}`);
  console.log(`key=${key}`);
});
