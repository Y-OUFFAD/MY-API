/*Imports/Require*/
var express = require('express');
var createServer = require('node:http').createServer;
var path = require('path');
var Server = require('socket.io').Server;
/*Creation du serveur Express*/
var router = express.Router();
var app = express();
app.use(express.static('myapp'));
var server = createServer(app);
var io = new Server(server);
/*Routes*/
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/myapp/index.html'));
});
// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });
router.get("/connexion", function (req, res) {
    res.sendFile(path.join(__dirname + '/myapp/views/connexion.html'));
});
router.get("/inscription", function (req, res) {
    res.sendFile(path.join(__dirname + '/myapp/views/inscription.html'));
});
router.get("/sms", function (req, res) {
    res.sendFile(path.join(__dirname + '/myapp/views/sms.html'));
});
router.get("/canaux", function (req, res) {
    res.sendFile(path.join(__dirname + '/myapp/views/canaux.html'));
});
//add the router
app.use('/', router);
/*Messagerie*/
io.on('connection', function (socket) {
    console.log('a user connected');
});
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
