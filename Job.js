var mongoose = require('mongoose');




mongoose.connect('mongodb://XuWoan1:30071996@139.59.99.218:27017/servicemywork');
//mongoose.connect('mongodb://139.59.99.218:27017/servicemywork');
var jobSchema = new mongoose.Schema({ 
    "key" : Number,
    "name" : String,
   
},{ collection : 'job' });



// create model if not exists.
module.exports = mongoose.model('job',jobSchema);