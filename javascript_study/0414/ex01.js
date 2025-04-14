const obj = {
  value: 10,
  value2: 20,
  //   ex2020 / 원시값 변환하는 규칙을 정의: toPrimitive
  [Symbol.toPrimitive](hint) {
    // if (hint === "number") return this.value;
    // if (hint === "string") return `Value = ${this.value}`;
    return this.value + this.value2;
  },
  //   for of 스프레드문법 객체분해 배열분해
  [Symbol.iterator]() {
    return {
      next() {
        return { value: 1, done: false };
      },
    };
  },
};
console.log(obj);
console.log(+obj); // 타입변환숫자
console.log(`${obj}`); // 타입변환문자열

console.log(obj[Symbol.iterator]().next());
