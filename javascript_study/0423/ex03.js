function aa() {
  console.log("aa");
}

function bb() {
  console.log("bb");
}

setTimeout(aa, 0); // 0이면 4ms의 딜레이가 생성됨.
bb();
