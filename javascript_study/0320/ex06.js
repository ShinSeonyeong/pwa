class AA {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

class BB extends AA {
    constructor(...restArgs) {
        super(...restArgs);
        this.name = "asdf";
    }
}

const me = new BB(10, 20);
console.log(me);