const obj = {
    value: 100,
    foo() {
        // const that = this;
        // setTimeout(function () {
        //     console.log('hello, callback함수');
        //     // console.log(this);
        //     // console.log(this.value);
        //     console.log(this.value);
        //     // console.log(that.value);
        // }.bind(this), 1000);

        setTimeout(() => {
            console.log(this.value);
        }, 1000);
    }
}

obj.foo();