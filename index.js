var cors = require("cors");
var http = require("http");
var dotenv = require("dotenv");
var express = require("express");
var socket = require("socket.io");
var bodyParser = require("body-parser");

// dotenv.config();

// var DBCONNECT = require("./config/db");
var { HTTP } = require("./config/setting").config;
// var auth = require("./api/middlewares/authorization");

// //init app
var app = express();
// var httpServer = http.createServer(app);

// var ioHttp = socket(httpServer);
// var Router = express.Router();

// DBCONNECT();

// //app config
// app.use(cors());
// app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.use((req, res, next) => {
//   req.ioHttp = ioHttp;
//   next();
// });

app.get('/', (req, res) => {
  res.send(
    `<h1 style="color: coral">
            PIKII API
        </h1>
        `
  )
});

// app.use("/api/admin/*", auth(0));
// app.use("/api/client/*", auth(1));
// app.use("/api/resto/*", auth(2));
// app.use("/api/livreur/*", auth(3));
// app.use("/api/supermarche/*", auth(4));
// app.use("/api/marchand/*", auth(5));
// app.use("/api/common/*", auth("*"));

// app.use("/api", require("./api/common/controllers")(Router));
// app.use("/api", require("./api/supermarche")(Router));
// app.use("/api", require("./api/restaurant")(Router));
// app.use("/api", require("./api/marchand")(Router));
// app.use("/api", require("./api/livreur")(Router));
// app.use("/api", require("./api/client")(Router));
// app.use("/api", require("./api/admin")(Router));

// ioHttp.on("connection", function (socket) {
//   console.log("Socket.io connected");
// });

// app.listen(HTTP, () => {
//   console.log(`Server started on http://${HTTP.host}:${HTTP.port}`);
// });


app.listen(5000, () => {
  console.log(`Server started on 5000`);
});
