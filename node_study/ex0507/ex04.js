console.log("일반함수");
console.log(this); // 빈객체
function aa() {
  console.log(this);
}
// aa();

const a = {
  name: "zero",
  friend: ["nore", "hero", "xero"],
  logFriend: function () {
    var that = this;
    console.log(this);
    this.friend.forEach(function(f){
    //   console.log(this); 
      console.log(that.name, f);
    });
  },
};

console.log("화살표함수");
// const b = {
//   name: "zero",
//   friend: ["nore", "hero", "xero"],
//   logFriend() {
//     () => {
//       this.friend.forEach((f) => {
//         console.log(f);
//       });
//     };
//   },
// };

a.logFriend();
// b.logFriend();
