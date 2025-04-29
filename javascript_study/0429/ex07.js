new Promise((resolve) => {
  resolve("정상");
})
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log("무조건 실행됨");
  });

  
new Promise((resolve, reject) => {
  resolve("에러");
})
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("무조건 실행됨");
  });


new Promise((resolve, reject) => {
  resolve("에러");
})
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("무조건 실행됨");
  });
