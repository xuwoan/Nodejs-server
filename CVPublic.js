var mongoose = require('mongoose');


mongoose.connect('mongodb://XuWoan1:30071996@139.59.99.218:27017/servicemywork');
//mongoose.connect('mongodb://139.59.99.218:27017/servicemywork');
var cvpublicSchema = new mongoose.Schema({ 
    "userid" : String,
    "job":String,
    "dep_id":Number,
    "active":Boolean,
    "like":Number
    
},{ collection : 'cvpublic' });



// create model if not exists.
module.exports = mongoose.model('cvpublic',cvpublicSchema);