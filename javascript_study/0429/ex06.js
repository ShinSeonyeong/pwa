const a = -10;
function getPromise() {
  return new Promise((resolve, reject) => {
    if (a > 0) {
      resolve("정상적으로 되었습니다.");
    } else {
      reject("실패하였습니다.");
    }
  });
}

getPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
