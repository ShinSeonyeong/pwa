function doA({content, completed}) {
  console.log(`content: ${content} completed: ${completed?"완료":"미완료"}입니다.`);
}
const todo = { id: 1, content: "HTML", completed: true };
doA(todo);
