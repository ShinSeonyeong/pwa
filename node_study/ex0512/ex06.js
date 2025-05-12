const util = require("util");

const dontUseMe = util.deprecate(() => {
  console.log("dont use me");
}, "사용하지 않았으면 좋겠다.");

dontUseMe();