const express = require("express");
const { fstat } = require("fs");
const fs = require("fs")
const http = require("http");
const path = require("path");
const { join } = require("node:path");
const { Server } = require("socket.io");

let posY = 0;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === "/" ? "index.html"
    : req.url);

    //Extension of file
    let extname = path.extname(filePath);

    //Initial content type
    let contentType = `text/html`;

    //Check ext and set content type
    switch(extname) {
        case ".js":
            contentType = "text/javascript"
            break;
        case ".css":
            contentType = "text/css"
            break;
        case ".json":
            contentType = "application/json"
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    //Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if(err.code == "ENOENT") {
                // Page not found
                console.log("Page not found! Oops!");
            } else {
                //Some Servor Error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //Success
            res.writeHead(200, {"content-Type": contentType})
            res.end(content, "utf8");
        }
    });
});

const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("requests", (arg) => {
        posY = arg;
        console.log(posY)
    })
    socket.on("update", (arg) => {
        socket.emit("responses", posY);
    })
    //socket.on("chat message", (msg) => {
        //io.emit("chat message", msg);
    //});
});

const PORT = process.env.PORT || 3000;

//server.maxConnections = 2;

server.listen(PORT, () => {
    console.log("server running at http://localhost:3000");
});


