const url = "https://github.com/ShinSeonyeong/index.html";
const re = /^https?:\/\/[\w]+.[\w]+.[\w]+\/[\w]+.html$/;

// url 주소가 맞는지 확인
console.log(re.test(url));
console.log(url.match(re));
