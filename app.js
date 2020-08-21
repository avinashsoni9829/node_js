var events=require('events');

var util= require('util');

var person = function(name){
   this.name=name;
};

util.inherits(person,events.EventEmitter);    //pass:   object ,thing to be inherited
 
var  avinash   = new person ('avinash');
var  darsh     = new person ('darsh');
var  ghanish   = new person ('ghanish');
var  binod     = new person ('binod');

var dost=[avinash,darsh,ghanish,binod];


dost.forEach(function(person)  {
    person.on('speak',function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});


avinash.emit('speak','jai shree ram!');

darsh.emit('speak','candy crush!');

ghanish.emit('speak','buble ki tuble');

binod.emit('speak','binod');

