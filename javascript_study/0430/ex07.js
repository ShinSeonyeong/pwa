const reqData1 = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(1);
    }, 3000);
  });
};
const reqData2 = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(2);
    }, 3000);
  });
};
const reqData3 = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(3);
    }, 3000);
  });
};

// const result = reqData();
// console.log(result);

// reqData()
//   .then((result) => {
//     console.log(result);
//     return reqData2();
//   })
//   .then((result) => {
//     console.log(result);
//     return reqData3();
//   })
//   .then((result) => {
//     console.log(result);
//   });

// Promise.all은 3개를 병렬처리 하기 때문에 3초만에 끝이 난다.
const result = Promise.allSettled([reqData1(), reqData2(), reqData3()]);
console.log(result);

Promise.all([reqData1(), reqData2(), reqData3()]).then((res) => {
  console.log(res);
});
