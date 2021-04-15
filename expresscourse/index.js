const express= require('express');
const path=require('path');
const moment=require('moment');
const exphbs=require('express-handlebars');

const bprser = require('body-parser')
const app = express();
const logger=require('./middleware/logger')

const members = require('./Members');

const PORT=process.env.PORT || 5000;


// using handlebars Middleware : 

app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');



app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));



// homepage route
app.get('/', (req, res) => res.render('index',{
  title: 'Member app',
  members
}))


app.use(express.static(path.join(__dirname,'public')));

// // sending files
// app.get('/',(req,res) =>{

//       res.sendFile(path.join(__dirname,'public','index.html'));
// }) 

// set static folder 
// using Body parser middleware


app.use('/api/members',require('./routes/api/members'))

//

// get request route :






//app.use(logger);


// get single member: 
// parseInt is used as   members. id =  int , req.params.id =  string so it need to be typecasted   

app.listen(PORT,()=> console.log(`listening to port ${PORT}`));


