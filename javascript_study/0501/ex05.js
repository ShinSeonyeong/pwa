// async, await 방식
async function foo() {
  // then 방식
  //   const a = new Promise((resolve) => resolve("1")).then((res) =>
  //     console.log(res)
  //   );

  const a = await new Promise((resolve) => resolve("1"));
  const b = await new Promise((resolve) => resolve("2"));
  const c = await new Promise((resolve) => resolve("3"));
  console.log([a, b, c]);
}

foo();
