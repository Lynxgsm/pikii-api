const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const socket = require("socket.io");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000

// CORS CONFIG FOR HEROKU
conf = {
  port: PORT,
  // origin undefined handler
  // see https://github.com/expressjs/cors/issues/71
  originUndefined: function (req, res, next) {
    if (!req.headers.origin) {
      res.json({
        mess: 'Hi you are visiting the service locally. If this was a CORS the origin header should not be undefined'
      });
    } else {
      next();
    }
  },
  // Cross Origin Resource Sharing Options
  cors: {
    // origin handler
    origin: function (origin, cb) {
      // setup a white list 
    },
    optionsSuccessStatus: 200
  }
};

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

//app config
app.use(conf.originUndefined, cors(conf.cors));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  req.ioHttp = ioHttp;
  next();
});

app.get("/", (req, res) => {
  return res.send("Hello from server");
});

app.use("/api/admin/*", auth(0));
app.use("/api/client/*", auth(1));
app.use("/api/resto/*", auth(2));
app.use("/api/livreur/*", auth(3));
app.use("/api/supermarche/*", auth(4));
app.use("/api/marchand/*", auth(5));
app.use("/api/common/*", auth("*"));

app.use("/api", require("./api/common/controllers")(Router));
app.use("/api", require("./api/supermarche")(Router));
app.use("/api", require("./api/restaurant")(Router));
app.use("/api", require("./api/marchand")(Router));
app.use("/api", require("./api/livreur")(Router));
app.use("/api", require("./api/client")(Router));
app.use("/api", require("./api/admin")(Router));

ioHttp.on("connection", function (socket) {
  console.log("Socket.io connected");
});

httpServer.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});


// express()
//   .get('/', (req, res) => res.send('Hello World with socket connection'))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`))
