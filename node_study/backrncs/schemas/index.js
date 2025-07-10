const mongoose = require("mongoose");
require("dotenv").config(); // process.env env에 설정한 내용을 가져옴

const mongo_url = process.env.MONGO_URL;

const connect = () => {
  mongoose
    .connect(mongo_url, { dbName: "rncs" })
    .then(() => {
      console.log("connect to mongo success");
    })
    .catch((err) => {
      console.error("Mongo DB Error", err);
    });
};

module.exports = connect;
