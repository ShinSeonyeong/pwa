// 에러객체를 생성만 했을 때는 예외 이벤트 실행불가능
new Error("에러생성");

// throw 하게되면 강제종료됨, try ~ catch문으로 감싸서 실행
try {
  throw new Error("에러생성");
} catch (e) {
  console.log("에러");
}

console.log("종료되었습니다.");
