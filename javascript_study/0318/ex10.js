class Student{
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }

    doB(age){
        this.age = age;
    }

    static doA(){
        console.log('정적 메서드')
    }
}
// Student.doA();
f
const stu = new Student("홍길동", "A");
stu.doB(30);
console.log(stu);

// stu.doA();