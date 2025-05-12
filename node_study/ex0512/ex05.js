// 단방향 / 양방향 암호화

const crypto = require("crypto");

crypto.randomBytes(64, (err, buf) => {
  if (err) {
    console.error(err);
    return;
  }
  //   console.log(buf);
  //   console.log(buf.toString());
  const key = buf.toString("base64");
  console.log(key); // salt
  crypto.pbkdf2("password", key, 100000, 64, "sha512", (err, derivedKey) => {
    console.log("password:", derivedKey.toString("base64"));
  });
});
