const obj = { aa: 10, bb: 20 };
for (const test in obj) {
    console.log(test);
}
for (const test of [1,2,3,4]) {
    console.log(test);
}
// 객체는 in으로, 배열은 of로 순회해야 한다. 
const iter = {
  aa() {},
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;
    return {
      next() {
        return { value: cur++, done: max < cur };
      },
    };
  },
};

// 이터러블 프로토콜: forof, 스프레드, 배열 분해가 된다.
for (const element of iter) {
  console.log(element);
}

console.log(...iter);
const [a, b, c, d] = iter;
console.log(`a=${a}`);
console.log(`a=${b}`);
console.log(`a=${c}`);
console.log(`a=${d}`);

const 이터레이터 = iter[Symbol.iterator]();
console.log(이터레이터.next()); // 이터레이터 프로토콜
console.log(이터레이터.next());
console.log(이터레이터.next());
