async function aa() {
  return "test"; 
}

console.log(aa());

const baa = await aa();
console.log(baa);

aa().then((baa) => {
  console.log(baa);
});
