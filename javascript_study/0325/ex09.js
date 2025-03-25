// mystak에 push가 없기때문에 아래와 같이 push 만들어줌.
// Stack.prototype.push = function(item){
//     // console.log("this = ");
//     // console.log(this);
//     this.arr.push(item);
// }

// Stack.prototype = {
//     push: function (item) { this.arr.push(item); }
// }

const Stack = function () {
    function Stack(arr = []) {
        if (!Array.isArray(arr)) {
            // 에러 강제 발생
            throw new TypeError(`${arr} is not an array`);
        }
        this.arr = arr;
    }

    Stack.prototype = {
        push(item) { this.arr.push(item); },
        pop() { return this.arr.pop(); },
        entries() { return [...this.arr]; }
    }
    return Stack;
}(); // (): 즉시호출

const mystack = new Stack([1, 2, 3])
// new stack("배열이아닌것")

mystack.push(4);
mystack.push(5);

mystack.pop();

console.log("mystack = ");
console.log(mystack);
console.log(mystack.entries());