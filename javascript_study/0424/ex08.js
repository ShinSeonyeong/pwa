// const { default: axios } = require("axios");

// fetch함수로 데이터 들고옴.
// get방식이 기본값,
// fetch("https://dummyjson.com/todos", {method: "POST"}) 넣으면 post 방식으로 변경
fetch("https://dummyjson.com/todos")
  .then((res) => res.json())
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  });

// npm i axios 설치 필요
const axios = require("axios");
axios.get("https://dummyjson.com/todos").then((res) => {
  console.log(res.data.todos);
});
