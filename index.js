var cors = require("cors");
var http = require("http");
var dotenv = require("dotenv");
var express = require("express");
var socket = require("socket.io");
var bodyParser = require("body-parser");

dotenv.config();

express()
  .get('/', (req, res) => res.send('helloworld'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
