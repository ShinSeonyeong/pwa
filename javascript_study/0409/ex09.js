// 피보나치 수열
const fibo = {
  [Symbol.iterator]() {
    // const [myNum, setMyNum] = [10, function () {}];
    let [pre, cur] = [0, 1];
    return {
      next() {
        // value값: 1,2,3,5,8
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: false };
      },
    };
  },
};

const iter = fibo[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
