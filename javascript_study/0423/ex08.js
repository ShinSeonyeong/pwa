// 스로틀
const throttle = () => {
  let timerId;
  return () => {
    console.log("test");
    if (timerId) return;
    timerId = setTimeout(() => {
      console.log("callback함수 호출됨");
      clearTimeout(timerId);
      timerId = null; // undefined도 false값 나옴
    }, 300);
  };
};

const aa = throttle();

aa();
aa();
aa();
aa();
aa();
aa();
aa();
aa();
aa();
aa();
aa();
aa();
