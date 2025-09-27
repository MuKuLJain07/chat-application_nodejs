const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const publicDirectoryPath = path.join(__dirname, './views');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

const port = process.env.PORT || 3000;

let count = 0;

io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    io.emit('welcomeUser')  

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })
})  

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
