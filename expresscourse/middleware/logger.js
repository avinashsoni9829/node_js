const moment=require('moment');
// middleware :

const logger=(req,res,next) =>{
    console.log(`${req.protocol}:// ${req.get('host')} ${req.originalUrl} : ${moment().format()}`);
    next();
}

// in order to initialize middleware


module.exports=logger;
