// String.prototype.match
// RegExp.prototype.exec
// RegExp.prototype.test
function camelToSnake(str) {
  console.log(str);
  console.log(str.match(/.[A-Z]/));

  // 1. replace(aa, bb) 사용해서 바꾸는 방법
  // 2. replace(aa, (aa)=>{}); 사용해서 바꾸는 방법
  return str.replace(/.[A-Z]/, (ele) => {
    console.log(ele);
    return ele[0]+'_'+ele[1].toLowerCase();
  });
}
console.log(camelToSnake("helloWorld"));
