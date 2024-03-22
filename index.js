var http = require('http');

var app = http.createServer((req, res) => {
        res.end("Hello World");
});
app.listen(4000);