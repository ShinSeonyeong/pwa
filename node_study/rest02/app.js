const express = require("express");
const app = express(); // express 호출

// CRUD: Create, Read, Update, Delete
// GET: 데이터 조회
// POST: 데이터 생성
// PUT: 데이터 수정
// DELETE: 데이터 삭제
// REST API: HTTP 메서드에 따라 CRUD 작업을 수행하는 API
app.get("/", (req, res) => {
  res.send("Hello Get!");
});

app.post("/", (req, res) => {
  res.send("Hello Post!");
});

app.put("/", (req, res) => {
  res.send("Hello Put!");
});

app.delete("/", (req, res) => {
  res.send("Hello Delete!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
