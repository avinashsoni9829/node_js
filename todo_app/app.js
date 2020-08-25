var express=require('express');
var todoController=require('./controllers/todoController');

var app=express();
//template engine
app.set('view engine','ejs');

//static files

app.use(express.static('./public'));


app.listen(3000);
console.log('server connected!');


todoController(app);

/*
MVC architecture !
MODEL  : DATA FOR EX: TODOS,USERS
VIEWS  : TEMPLATE FILES FROM EJS EX TODO.EJS ACCOUNT.EJS
CONTROLLER : APP CONTROLS  - TODOCONTROLLER - USERCONTROLLER   [THIS BRIDGES THE MODELS AND VIEWS ]








*/
