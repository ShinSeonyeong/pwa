async function foo() {
  try {
    const result = await fetch(
      "https://6809e0631f1a52874cde2b73.mockapi.io/todos/22"
    );

    const body = await result.json();

    console.log(body);
  } catch (e) {
    console.log(e);
  }
  console.log("함수종료");
  // try ~ catch 가 없으면 프로그램 강제종료가 되므로 실행하지 않음.
}

foo();

console.log("종료되었습니다");
