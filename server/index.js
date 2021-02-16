const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

const mongoose = require('mongoose');
const User = require('./models/user');

const dbURI =
    'mongodb+srv://admin:admin@cluster0.lyddh.mongodb.net/usersdb?retryWrites=true&w=majority';

mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('connected to db'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/chat/:roomName', (req, res) => {
    const roomName = req.params.roomName;
    User.find({ roomName })
        .then((result) => res.send(result))
        .catch((err) => console.error(err));
});

app.post('/add-user', (req, res) => {
    const user = new User({
        name: req.body.name,
        img: req.body.img,
        roomName: req.body.roomName,
    });
    user.save()
        .then((result) => res.send(result))
        .catch((err) => console.error(err));
});

const PORT = 5000;
const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';

io.on('connection', (socket) => {
    const { roomName } = socket.handshake.query;
    socket.join(roomName);

    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
        io.in(roomName).emit(NEW_CHAT_MESSAGE_EVENT, data);
    });

    socket.on('disconnect', () => {
        socket.leave(roomName);
    });
});

server.listen(PORT || 5000, () => {
    console.log('listening on *:5000');
});
