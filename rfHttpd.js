var http = require('http');
//var fs = require('fs');
var url = require('url');
http.createServer(function(req, res){
    if(req.url != '/favicon.ico'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//        fs.readFile('../www/index.html', function(err, data){
//            if(err){
//                res.write(err.toString());
//            }else{
//                res.write(data.toString());
//            }
//            res.end();
//        });
        var pathname = url.parse(res.url).pathname;
        res.write(pathname);
    }
}).listen(80);
