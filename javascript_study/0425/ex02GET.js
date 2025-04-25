fetch("http://localhost:5000/todos")
  .then((res) => res.json()) // 돌아오는 파일을 json으로 만들어줌.
  .then((data) => {
    console.log(data);
  });
