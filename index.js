const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const socket = require("socket.io");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000

dotenv.config();
const DBCONNECT = require("./config/db");

const { HTTP } = require("./config/setting").config;
const auth = require("./api/middlewares/authorization");

express()
  .get('/', (req, res) => res.send('Hello World with HTTP and auth'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
