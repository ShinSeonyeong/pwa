const mongoose = require('mongoose');
const {MONGO_PASSWORD} = process.env;

const mongo_url = `mongodb+srv://tlstjsdud1920:${MONGO_PASSWORD}@cluster0.itrfgeo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connect = () => {
  mongoose.connect(mongo_url, {dbName: 'rncs'})
      .then(() => {
        console.log("connect to mongo success");
      })
      .catch((err) => {
        console.error("Mongo DB Error", err);
      })
}

module.exports = connect;