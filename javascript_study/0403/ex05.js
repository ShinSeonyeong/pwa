fetch("https://jsonplaceholder.typicode.com/comments/")
  .then((result) => {
    console.log(result);
    if (result.status.toString().startsWith("2")) {
      console.log("정상");
      return result.json();
    } else {
      console.log("주소 잘못됐음.");
      throw new Error("error 입니다");
    }
  })
  .then((json) => {
    // console.log(json);
  })
  .catch(e=>{
    console.log(e);
  })
