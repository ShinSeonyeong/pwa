const person = {
    // 데이터 프로퍼티 예시
    fName: '홍',
    lName: '길동',

    // 접근자 프로퍼티 예시
    get fullName() {
        return `fname ${this.fName} lName ${this.lName}`;
    },
    set fullName(name){
        [this.fName, this.lName] = name.split(" ");
    }
}

console.log(person);
console.log(person.fullName);

person.fullName = "박 길동";
console.log(person.fullName);