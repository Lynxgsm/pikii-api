const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const socket = require("socket.io");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send('Hello World with cors and http'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
