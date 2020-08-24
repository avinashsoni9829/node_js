var http=require('http');
var fs=require('fs');


var server=http.createServer(function(req,res)
{
    console.log('req at'+req.url);
    res.writeHead(200,{
        'Content-Type':'application/json'
});

var myObj={
    name:'binod',
    job:'sleep',
    age:100
};

res.end(JSON.stringify(myObj));  
//.end method either takes a string or a buffer in the parameters!  so we cant directly send the object we have created
// so we use the json.stringify method to convert the object into the string 



});

server.listen(3000,'127.0.0.1');
console.log('server connected !');
