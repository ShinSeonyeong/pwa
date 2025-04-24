const xhr = new XMLHttpRequest();

xhr.open("get", "https://dummyjson.com/todos");

xhr.send();

xhr.onreadystatechange = () => {
  console.log("readyState값이 변경 될 때마다 출력");
  if (xhr.status === 200) {
    console.log(JSON.stringify(xhr.response));
  }
};
