var port = 4200;
var express = require("express");
var Gun = require("gun");
var path = require("path");
var app = express();
//app.use(Gun.serve);
app.use(express.static(__dirname+'/public'));
app.use("public", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
var server = app.listen(port);


var gun = Gun({file: false, radisk: false, web: server });

let pulse = setInterval(()=>{
  gun.get('etovoteto').get('relay').get('pulse').put(Date.now())
}, 100)


console.log("Server started on port " + port + " with /gun");
