// rest api
fetch("https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=861")
  .then((text) => {
    console.log(text);
    return text.json();
  })
  .then((json) => {
    console.log(json);
  });

  fetch("https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=861")
  .then((text) => {
    console.log(text);
    return text.json();
  })
  .then((json) => {
    console.log(json);
  });