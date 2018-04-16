var mongoose = require('mongoose');




mongoose.connect('mongodb://XuWoan1:30071996@139.59.99.218:27017/servicemywork');
//mongoose.connect('mongodb://139.59.99.218:27017/servicemywork');
var cvtoemployerSchema = new mongoose.Schema({ 
    "cvid" : String,
    "candidateid":String,
    "recruimentid" : String,
    "employerid" : String,
    "position" : String,
    "date":Date
   
},{ collection : 'cvtoemployer' });



// create model if not exists.
module.exports = mongoose.model('cvtoemployer',cvtoemployerSchema);