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
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

// app.get('/socket.io/socket.io.js', (req, res) => {
//   res.sendFile(path.resolve('node_modules/socket.io-client/dist/socket.io.js'));
// });
 
// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });
 
router.get("/connexion",function(req,res){
  res.sendFile(path.join(__dirname+'/views/connexion.html'));
});

router.get("/inscription",function(req,res){
  //le chemain actuel
  res.sendFile(path.join(__dirname+'/views/inscription.html')); 
});
router.get("/sms",function(req,res){
  res.sendFile(path.join(__dirname+'/views/sms.html'));
});
router.get("/canaux",function(req,res){
  res.sendFile(path.join(__dirname+'/views/canaux.html'));
});

router.get("/page",function(req,res){
  res.sendFile(path.join(__dirname+'/views/page.html'));
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


//npm start pour lance le projet. Après avoir installer npm install nodemon -g//



const mysql  = require('mysql'); 
require('dotenv').config({path: __dirname +'/.env'})
console.log( process.env.DB_HOST);
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
connection.connect (function(err) {
  if (err) throw err;
  console.log ("connected");
});


// var mysql = require('mysql');

var connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "myIRC"
});

connect.connect(function(err) {
  connect.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
