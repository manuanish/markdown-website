const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs');

var data = fs.readFileSync(__dirname + '/static/index.md', 'utf8')


app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', (socket) => {
  var data = fs.readFileSync(__dirname + '/static/index.md', 'utf8')
  socket.emit("page_data", data);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

fs.watch(__dirname + '/static/index.md', function (event, filename) {
    if (filename) {
        var data = fs.readFileSync(__dirname + '/static/index.md', 'utf8')
        io.emit("page_data", data);
    } else {
    }
});
