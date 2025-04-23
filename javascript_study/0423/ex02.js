let count = 1;
function aa() {
  count++;
  console.log("aa");
  if (count === 5) clearInterval(inter);
}

function bb() {
  console.log("bb");
}

const inter = setInterval(aa, 1000);
bb();
