var http=require('http');
var fs=require('fs');


var myReadStream=fs.createReadStream(__dirname + '/readme.txt','utf8');

var myWriteStream=fs.createWriteStream(__dirname+'/writeMe.txt');


myReadStream.on('data',function(chunk){
    
    console.log('new chunk recieved:');
    
    myWriteStream.write(chunk);

});



/*var http=require('http');

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
*/
