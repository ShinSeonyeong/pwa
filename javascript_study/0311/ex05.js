// console.log(document);
// console.log(process);
// console.log(XMLHttpRequest);
// console.log(fetch);

// 1. then 사용
// URL의 소스를 가지고 오라는 것
fetch('https://cjo3o.github.io/p2-jim/header.html')
    // 가지고 온 소스를 string으로 변환하는 것
    .then(Response => Response.text())
    // string으로 변환한 것을 data라는 변수에 넣는 것
    .then(data => {
        console.log(data);
    })

// 2. await 사용
// URL의 소스를 가지고 오라는 것
const response = await fetch('https://cjo3o.github.io/p2-jim/header.html')