const mongoose = require("mongoose");
const { DB } = require("./setting").config;

function Mongodb() {
  mongoose.connect(DB.DBCONNECT(), DB.URLPARSER, function () {
    console.log("Mongodb connected");
  });
}

module.exports = Mongodb;
