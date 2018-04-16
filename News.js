var mongoose = require('mongoose');




mongoose.connect('mongodb://XuWoan1:30071996@139.59.99.218:27017/servicemywork');
//mongoose.connect('mongodb://139.59.99.218:27017/servicemywork');
var newsSchema = new mongoose.Schema({ 
    "title" : String,
    "type" : Number,
    "image":String,
    "content":String,
    "date":Date,
    "viewer":Number

   
},{ collection : 'news' });



// create model if not exists.
module.exports = mongoose.model('news',newsSchema);