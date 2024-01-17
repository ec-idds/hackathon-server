const fs = require("fs");
const path = require("path");

//Create a folder
//fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//    if(err) throw err;
//    console.log("Folder created...")
//});

//Create and write to file
//fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello World!", err => {
//    if(err) throw err;
//    console.log("File Written to...")
//    fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " and node JS", err => {
//        if(err) throw err;
//        console.log("Folder created...")
//    });
//
//});

//Read file
//fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//    if(err) throw err;
//    console.log(data)
//});

//Rename file
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloWorld.txt"), (err, data) => {
    if(err) throw err;
    console.log("File Renamed...")
});
