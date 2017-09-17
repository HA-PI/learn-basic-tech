var http = require('http')
var fs = require('fs')
var url = require('url')

var server = http.createServer(function (req, response) {
    response.sendDate = false;
    response.writeHead(200, { 'Content-Type': 'text/plain',
        'Trailer': 'Content-MD5' });
    response.write("sdss");
    response.addTrailers({'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667'});
    response.end();

}).listen(10000, function () {


    http.request(url.parse('http://localhost:10000/'), function (res) {
        console.log(res.headers)
        console.log(res.trailers)
        res.pipe(process.stdout)
    }).end()
});

