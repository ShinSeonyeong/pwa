fetch("http://localhost:5000/todos", {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    todo: "스쿼트 80kg 1RM",
    completed: true,
  }),
})
  .then((res) => res.json()) // 돌아오는 파일을 json으로 만들어줌.
  .then((data) => {
    console.log(data);
  });
