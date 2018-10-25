var express = require('express');
var app = express();
var fs = require("fs");

app.get('/api', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

var server = app.listen(3030, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});