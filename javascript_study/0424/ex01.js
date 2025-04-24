const loadash = require("lodash");

const { debounce, throttle } = loadash;

// console.log(loadash.debounce);
// console.log(loadash.debounce);

const aa = debounce(() => {
  console.log("debounce");
}, 300);
aa();
aa();
aa();
aa();
