try {
  // throw new Error("에러발생");
  setTimeout(() => {
    throw new Error("에러발생");
  }, 1000);
} catch (e) {
  console.error(e);
}

console.error("종료되었습니다.");
