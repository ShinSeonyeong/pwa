const person = {
    name: "홍길동",
    foo(callback) {
        setTimeout(callback.bind(this), 1000);
    }
}

person.foo(function () { 
    console.log(this.name); 
});