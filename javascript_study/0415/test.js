function updateList() {
  const items = ["사과", "바나나", "포도", "파인애플"];
  let html = "<ul>";
  for (const item of items) {
    html += `<li>${item}</li>`;
  }
  html += "</ul>";
  console.log(html);
  document.getElementById("app").innerHTML = html;
}
updateList();