var http = require("http");
var fs = require("fs");

var obj = require("./test.json");

var PORT = 8080

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {
        case "/":
        fs.readFile(__dirname + "/index.html", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
        break;

        case "/test.json":
        fs.readFile(__dirname + "/test.json", function(err, data) {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(data);
        });
        break;

        default: 
        fs.readFile(__dirname + "/index.html", function(err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          });
        break;
    }
}

//json.parse 
//loop through object 

var objects = obj.data;
for (var object in objects) {
    console.log("key" + object + "value " + objects[object].Timestamp);
}


// var jsonObj = JSON.parse(objects);
// console.log(jsonObj.Timestamp);


// var oData = obj.data;
// var jsonObj = JSON.parse(oData);
// console.log(jsonObj.Timestamp);

// Let's us know the server is listening
server.listen(PORT, function() {
    console.log("server is listening on PORT: " + PORT);
});
