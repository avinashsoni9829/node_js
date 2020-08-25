var express=require('express');

var app=express();
//setting ejs as our view engine 
    
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

// in order to pass data to a view we need to pass it as an object 
app.get('/profile/:id',function(req,res) {
    var data={age:21, job:'sleep',hobbies:['eating','sleeping','more sleeping']};
    
    res.render('profile',{person: req.params.id,data:data});


});

app.listen(3000);




