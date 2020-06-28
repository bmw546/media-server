const http = require('http');


const express = require('express');

// Load the DB handler. (It will create it)
const {postGres} = require("servercore/postgres/postgresPipe");

const app = express();
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log("Example app listening at http://%s:%s", host, port);
});

app.get('/', function (req, res) {
  res.send('Hello World');
});


function loadRoutes(Route){

  const appModule = new AppModuleClass();

  appModule.registerApiRoutes(app);
  appModule.registerModuleEvents();
  appModule.bindEventHandlers(PubSubBroker.Instance);
}