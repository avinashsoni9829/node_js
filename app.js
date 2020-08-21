var fs=require('fs');

fs.unlink('./stuff/newfile.txt',function()
{
    fs.rmdir('stuff',function(err)
    {
        if(err)
        throw err;
        
    });
});




