/**
 * Created by apple on 16/1/6.
 */
import express from "express";
import {Server} from "http";

var app = express();
var http = Server(app);

var rootPath = require('path').normalize(__dirname+'/../..');
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.use(express.static(rootPath+'/public'));

var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    })
});

app.get("/", (req, res)=>{
    res.render("index");
});
http.listen(3000, ()=>{
    console.log("aaa");
});