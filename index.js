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

//init app
const app = express();
const httpServer = http.createServer(app);

const ioHttp = socket(httpServer);
const Router = express.Router();

DBCONNECT();

express()
  .get('/', (req, res) => res.send('Hello World with init app and DBCONNECT'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
