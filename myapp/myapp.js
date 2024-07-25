/*Imports/Require*/
var express = require('express');
var createServer = require('node:http').createServer;
var path = require('path');
var Server = require('socket.io').Server;
/*Creation du serveur Express*/
var router = express.Router();
var app = express();
var server = createServer(app);
var io = new Server(server);
app.use(express.static('myapp/views'));
/*Routes*/
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
// app.get('/socket.io/socket.io.js', (req, res) => {
//   res.sendFile(path.resolve('node_modules/socket.io-client/dist/socket.io.js'));
// });
// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });
router.get("/connexion", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/connexion.html'));
});
router.get("/inscription", function (req, res) {
    //le chemain actuel
    res.sendFile(path.join(__dirname + '/views/inscription.html'));
});
router.get("/sms", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/sms.html'));
});
router.get("/canaux", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/canaux.html'));
});
router.get("/page", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/page.html'));
});
//add the router
app.use('/', router);
/*Messagerie*/
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
server.listen(process.env.port || 3000, function () {
    console.log('Running at Port 3000');
});
//npm start pour lance le projet. Après avoir installer npm install nodemon -g//
var mysql = require('mysql');
require('dotenv').config({ path: __dirname + '/.env' });
console.log(process.env.DB_HOST);
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
connection.connect(function (err) {
    if (err)
        throw err;
    console.log("connected");
});
// var mysql = require('mysql');
var connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "myIRC"
});
connect.connect(function (err) {
    connect.query("SELECT * FROM users", function (err, result, fields) {
        if (err)
            throw err;
        console.log(result);
    });
});
