// // 에러 나지 않음 (constructor)
function foo() { };

foo();
new foo();

// 에러남 (non - constructor)
const arrow = () => { console.log("test"); }

arrow();
// new arrow(); // 에러남

const obj = {
    x(){
        console.log("obj: x");
    }
}
obj.x();

new obj.x();