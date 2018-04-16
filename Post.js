var mongoose = require('mongoose');




mongoose.connect('mongodb://XuWoan1:30071996@139.59.99.218:27017/servicemywork');
//mongoose.connect('mongodb://139.59.99.218:27017/servicemywork');
var postSchema = new mongoose.Schema({
    "title": String,
    "job": [{
        "require":
        {
            "experienceKey": Number,
            "genderKey": Number,
            "other": String
        },
        "info":
        {
            "address":
            {
                "address": String,
                "cityKey": []
            },
            "amount": Number
            ,
            "salary": {
                "salary": Number,
                "other": String
            },
            "jobKey": Number,
            "majorKey": Number,
            "typeKey": Number
        }
    }
    ],
    "detail": String,
    "contact": String,
    "deadline": String,
    "active": Boolean,
    "date": Date,
    "userID": String,

    "rate": Number


}, { collection: 'post' });



// create model if not exists.
module.exports = mongoose.model('post', postSchema);