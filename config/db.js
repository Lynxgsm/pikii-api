const mongoose = require("mongoose");
const { DB } = require("./setting").config;

function Mongodb() {
  mongoose.connect(DB.DBCONNECT(), DB.URLPARSER, function (e) {
    if(e){
    console.log("Erreur de connection");
    return;
    }
    console.log("Mongodb connected");
  });
}

module.exports = Mongodb;
