var express=require('express');
var bodyParser=require('body-parser');
var app=express();
//setting ejs as our view engine 
//this is used to get the data from the form !

var urlencodedParser=bodyParser.urlencoded({extended:false});

    
app.set('view engine','ejs');
//middle ware
app.use('/assets',express.static('assets'));

app.get('/',function(req,res)
{
    res.render('index');
});




app.get('/contact',function(req,res)
{
    
    res.render('contact',{qs:req.query});
});

app.post('/contact',urlencodedParser,function(req,res)
{
    console.log(req.body);
    res.render('contact-success',{data: req.body});
});


// in order to pass data to a view we need to pass it as an object 
app.get('/profile/:id',function(req,res) {
    var data={age:21, job:'sleep',hobbies:['eating','sleeping','more sleeping']};
    
    res.render('profile',{person: req.params.id,data:data});


});

app.listen(3000);




