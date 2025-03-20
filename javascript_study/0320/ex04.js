// 정적메서드: 객체생성해서 사용하면 안된다.
// 정적변수

console.log(Math.PI);

class DBInfo{
    static URL = "supabe";
    static URLPASS = "passwords";
    a = 10;
}

// 아래처럼 접근하면 안된다. 
const dbInfo = new DBInfo();
console.log(dbInfo.URL); // undefined
console.log(dbInfo.URLPASS); // undefined
console.log(dbInfo.a); // 10

// 바로 접근해서 사용해야 함. 
console.log(DBInfo.URL); // supabe
console.log(DBInfo.URLPASS); // passwords