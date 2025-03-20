class A{
    constructor(aa, bb){ // 2번 (빈객체{}가지고 옴)
        this.aa = aa;
        this.bb = bb;
    }

    doA(){ // 3번 (super()호출)
        console.log("A 클래스 안에 있는 doA() 메서드");
    }
}

class B extends A{
    constructor(aa, bb, cc){ // 1번 (빈객체{}가지고 옴)
        super(aa, bb); // 2번 (super()호출)
        this.cc = cc;
    }

    doA(){
        super.doA(); // 3번 (super()호출)
        console.log("B 클래스 안에 있는 doA() 메서드");
    }
}

const me = new B(10, 20, 30); // 1번
console.log(me);
me.doA(); // B 클래스 안에 있는 doA() 메서드