var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    if(req.url != '/favicon.ico'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.readFile('../www/index.html', function(err, data){
            if(err){
                res.write(err.toString());
            }else{
                res.write(data.toString());
            }
            res.end();
        });
    }
}).listen(80);