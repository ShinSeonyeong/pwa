// 피보나치 수열
const fibo = function (max) {
  // [Symbol.iterator](max): max값을 이렇게 넣으면 Symbol.iterator 규약이 깨짐
  return {
    [Symbol.iterator]() {
      // const [myNum, setMyNum] = [10, function () {}];
      let [pre, cur] = [0, 1];
      const max = 30;
      return {
        next() {
          // value값: 1,2,3,5,8
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur > max };
        },
      };
    },
  };
};

for (const element of fibo(30)) {
  console.log(element); // done: false이면 무한루프, 조건 걸어야 함.
}

// const iter = fibo[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
