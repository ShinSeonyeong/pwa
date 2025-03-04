function aa() {
    return (function () {
        console.log("즉시함수");
    });
}
aa()();
// const f = aa();
// console.log(f);