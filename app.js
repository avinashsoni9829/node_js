var fs=require('fs');
//can read and write files
// read!
var readMe=fs.readFileSync('readme.txt','utf-8');         /// parameters: (file name,charcter encoding,
fs.writeFileSync('writeMe1.txt','theory.txt');



//sync means that i will completely read the file first and then move to the further code !


//write!


//async calls : it need a  call back function to fire when the process is complete  ( parameters for call back fun: error,data)

fs.readFile('readme.txt','utf-8',function(err,data)
{
    console.log(data);
});

console.log('hello!!');
 //write file async
fs.readFile('readme.txt','utf-8',function(err,data)
{
    fs.writeFile('new.txt',data,(err)=>{})
});

