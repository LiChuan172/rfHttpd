require('http').createServer(function(req, res){
    res.write('hello, world!');
    res.end();
}).listen(80);