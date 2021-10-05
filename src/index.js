const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs');

// PORT
const port = 3000;


var data = fs.readFileSync(__dirname + '/static/index.md', 'utf8')


app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', (socket) => {
  var data = fs.readFileSync(__dirname + '/static/index.md', 'utf8')
  socket.emit("page_data", data);
});


// Watch for changes in the file
fs.watch(__dirname + '/static/index.md', function (event, filename) {
    if (filename) {
        var data = fs.readFileSync(__dirname + '/static/index.md', 'utf8')
        io.emit("page_data", data);
    } else {
    }
});


// Change Port Here
server.listen(port, () => {
  console.log('listening on *:' + port);
});
