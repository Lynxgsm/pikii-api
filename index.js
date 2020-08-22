var express = require("express");

express()
  .get('/', (req, res) => res.send('helloworld'))
  .listen(5000, () => console.log(`Listening on ${5000}`))
