fetch("http://localhost:5000/todos/97ce", {
  method: "put",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    todo: "수정했읍니다.",
    completed: false,
  }),
})
  .then((res) => res.json()) // 돌아오는 파일을 json으로 만들어줌.
  .then((data) => {
    console.log(data);
  });
