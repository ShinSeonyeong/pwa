const base = {
    sayHi(){
        console.log("base sayhi 함수");
    }
}

const derived = {
    __proto__: base,
    sayHi(){
        super.sayHi();  // base.sayHi() 호출
        console.log("derived sayhi 함수");
    },

    // 화살표 함수, 일반함수에서는 super 사용 못함
    // 'super' keyword unexpected here
    arrow:()=>{
        super.sayHi();
    }
}

derived.sayHi();
// derived.arrow();