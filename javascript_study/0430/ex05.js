class AA {
  static doA() {
    console.log("정적메서드 예시");
  }
}

AA.doA();

class Promise {
  constructor(url) {
    this.url = url;
  }
  static resolve() {
    const xhr = new XMLHttpRequest();
  }
}
