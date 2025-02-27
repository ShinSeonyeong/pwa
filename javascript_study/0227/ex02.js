function aa(name, age){
    this.name = name;
    this.age = age;
    console.log('호출');
    // return {};
}
console.log(`aa.constructor ${aa.constructor}`);
const temp = aa();
const temp2 = new aa('홍길동', age);
console.log(temp);
console.log(temp2);

console.log("==============")
const bb = ()=>{}
console.log(`bb.constructor ${bb.constructor}`);
new bb();