var cors = require("cors");
var http = require("http");
var dotenv = require("dotenv");
var express = require("express");
// var socket = require("socket.io");
var bodyParser = require("body-parser");

dotenv.config();

var DBCONNECT = require("./config/db");
var { HTTP } = require("./config/setting").config;

express()
  .get('/', (req, res) => res.send('helloworld'))
  .listen(5000, () => console.log(`Listening on ${5000}`))
