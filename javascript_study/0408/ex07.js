const arr = [10, 20, 30, 40, 50];
const myIter = {
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;
    return {
      next() {
        return {
          value: cur++, // for of의 element로 된다.
          done: max < cur, // done이 true가 되면 for of가 멈춘다
        };
      },
    };
  },
};

// 객체안에 [Symbol.iterator] 메서드를 생성하면
// 생성된 메서드는 객체를 리턴해야 하고
// 리턴된 객체 안에는 next() 함수 생성된다.
// next()함수는 value와 done을 반환하는 객체이다.
// for of로 나열이 가능하다.
for (const element of myIter) {
  console.log(element);
}

// prototype체인에 의해 symbol.itrator 구성.
const aaa = [10, 20, 30];
for (const element of aaa) {
    console.log(element);
}