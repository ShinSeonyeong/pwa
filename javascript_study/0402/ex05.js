const target = "color colour color colour";

// ?는 0번 포함 매칭
// +는 1번이라도 나오는 것 매칭
// const arr = target.match(/color+r/g);
const arr = target.match(/colou+r/g);
console.log(arr);