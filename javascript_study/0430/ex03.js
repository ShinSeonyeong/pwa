fetch("https://jsonplaceholder.typicode.com/users/10")
  .then((res) => {
    // console.log(res);
    if (res.status !== 404) return res.json(); // Promise객체로 rsolve(res.json)
    else return "싪패";
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
