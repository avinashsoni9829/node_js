var http=require('http');

var server=http.createServer(function(req,res)
{
    console.log('req at'+req.url);
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.end('hi bro!');
});

server.listen(3000,'127.0.0.1');
console.log('server connected !');
