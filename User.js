var mongoose = require('mongoose');




mongoose.connect('mongodb://XuWoan1:30071996@139.59.99.218:27017/servicemywork');
//mongoose.connect('mongodb://139.59.99.218:27017/servicemywork');
var userSchema = new mongoose.Schema({
    "userid":String,
    "type": Number,
    "detailcandidate": {
        "birthday": String,
        "name": String,
        "address": {
            "street": String,
            "city": {
                "key": Number,
                "name": String
            }

        },
        "phone": String,
        "email": String,
        "major":{
            "name": String,
            "key": Number
        },
      
        "avatar":  String

    },
    "detailemployer":
    {
        "name": String,
        "company": {
            "name": String,
            "phone": String,
            "email": String,
            "intro":String,
            "website":String,
           // "logo":  { "data": String, "contentType": String },
            "logo" : String,
            "address": {
                "street": String,
                "city": {
                    "key": Number,
                    "name": String
                }

            }
        }
    }



}, { collection: 'user' });



// create model if not exists.
module.exports = mongoose.model('user', userSchema);