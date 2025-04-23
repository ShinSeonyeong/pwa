const { debounce } = require("lodash");

debounce(() => {
  console.log("test");
}, 300);
