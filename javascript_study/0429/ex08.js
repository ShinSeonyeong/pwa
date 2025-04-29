fetch("https://6809e0631f1a52874cde2b73.mockapi.io/todos/1")
  .then((res) => {
    // console.log(res);
    console.log("이 부분이 실행됨.");
    return res.json(); //프로미스 <fullfilled상태>
  })
  .then((result) => {
    console.log("result=", result);
  })
  .catch((e) => {
    console.log(e);
  });
