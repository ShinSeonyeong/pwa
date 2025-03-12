function Circle() {
    this.radius = 5
    this.getDimeter = function () {
        return 2 * this.radius;
    }
}

Circle.prototype.getDimeter = function () {
    return this.radius * 2;
};

const c1 = new Circle();
console.log(c1.getDimeter());