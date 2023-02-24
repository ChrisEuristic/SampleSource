const app = require("express")();
const server = require("http").createServer(app);
const {Server} = require("socket.io")
const io = new Server(server);
const PORT = 4000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/sampleSocketIO.html');
    
});

app.get('/hello', (req, res) => {
  res.send("<h1>Hello!</h1>");
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (player, msg) => {
    io.emit('chat log', player, msg)
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});