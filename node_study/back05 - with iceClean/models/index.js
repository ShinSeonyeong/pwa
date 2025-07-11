"use strict";

const fs = require("fs"); // 파일 시스템 모듈
const path = require("path"); // 경로 관리 모듈
const { Sequelize } = require("sequelize"); // sequelize 모듈
const process = require("process"); // 프로세스 dotenv 모듈
const basename = path.basename(__filename); // 현재 파일의 절대경로까지 다 나옴
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
// const aa = require(__dirname + '/../config/aa')['aa'];

// console.log(config);
// console.log('aa', aa);

console.log(config);
const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.sequelize = sequelize; // sequelize객체를 db객체에 class변수로 적용

const User = require("./user");
const Comment = require("./comment");

db.User = User;
db.Comment = Comment;

// initiate 함수 호출하여 관계정의
User.initiate(sequelize);
Comment.initiate(sequelize);

// associate 함수 호출하여 관계맺기
User.associate(db);
Comment.associate(db);

// console.log(db);

module.exports = db;

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });
//
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
//
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
//
// module.exports = db;
