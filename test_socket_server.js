const http = require("http");
const path = require("path");
const fs = require("fs");

function handleRequest(req, res) {
    let pathname = req.url

    if (pathname === "/") {
        pathname = "/index.html"
    }


    let ext = path.extname(pathname);

    const typeExt = {
        ".html": "text/html",
        ".js": "text/javascript" ,
        "css": "text/css"
    };

    let contentType = typeExt[ext] || "text/plain"

    fs.readFile(__dirname + pathname,
        (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error Loading" + pathname);
            }
            res.writeHead(200, {"Content-Type": contentType})
            res.end(data)
        })
    }
let server = http.createServer(handleRequest);
server.listen(8080);

let io = require("socket.io").listen(server);

io.on("connection", function(socket) {
    console.log("New client logged in!" + socket.id);
});

