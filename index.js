const express = require('express')
const path = require('path')
const socket = require("socket.io");
const PORT = process.env.PORT || 5000
const cors = require("cors");
const http = require("http");

express()
  .get('/', (req, res) => res.send('Hello World with cors and http'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
