/*Imports/Require*/
const express = require('express');
const { createServer } = require('node:http');
const path = require('path');
const { Server } = require('socket.io');


/*Creation du serveur Express*/
const router = express.Router();
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('myapp/views'))

/*Routes*/
router.get("/",function(req,res){
  res.sendFile(path.join(__dirname+'/myapp/views/index.html'));
});

// app.get('/socket.io/socket.io.js', (req, res) => {
//   res.sendFile(path.resolve('node_modules/socket.io-client/dist/socket.io.js'));
// });
 
// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });
 
router.get("/connexion",function(req,res){
  res.sendFile(path.join(__dirname+'/myapp/views/connexion.html'));
});

router.get("/inscription",function(req,res){
  res.sendFile(path.join(__dirname+'/myapp/views/inscription.html'));
});
router.get("/sms",function(req,res){
  res.sendFile(path.join(__dirname+'/myapp/views/sms.html'));
});
router.get("/canaux",function(req,res){
  res.sendFile(path.join(__dirname+'/myapp/views/canaux.html'));
});
 
//add the router
app.use('/', router);

/*Messagerie*/
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(process.env.port || 3000, () => {
  console.log('Running at Port 3000');
});