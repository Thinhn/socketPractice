//NOTE: LEARN IT FROM https://socket.io/get-started/chat WITH A TWIST

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
var fs = require("fs");
const bodyParser = require("body-parser");
var port = 3000;
app.get("/",(req,res)=>{
    console.log("hello world");
    res.sendFile(__dirname+ "/home/index.html");
});


//listen to user who connect over
io.on("connection",(socket)=>{
    console.log("a user connected");
    socket.on("chat message",(msg)=>{
        console.log(msg);
        io.emit("chat message", msg);//emit it to everybody
    })
});

server.listen(port,()=>{
    console.log("listening on *:3000");
});