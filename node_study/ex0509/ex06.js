setImmediate(() => {
  console.log("immediate");
});

process.nextTick(() => {
  console.log("process.nextTick");
});

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve({name: "홍길동"}).then((data) => {
  console.log("promise"+data.name);
});

Promise.reject({name: "리길동"}).then((data) => {
  console.log("promise"+data.name);
});
