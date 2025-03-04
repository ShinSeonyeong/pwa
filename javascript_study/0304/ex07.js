function aa(obj) {
    obj.a = 20;
    console.log(`function a = ${obj.a}`);
}

const obj = { a: 10 };
aa(obj);
console.log(`전역공간의 obj a = ${obj.a}`);
