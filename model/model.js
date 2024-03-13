const mongoose = require('mongoose');

const empCrud = mongoose.model('empcrud', 
    {
        uname: String,
        email : String,
        password : String,
        city : String,
    })
module.exports = empCrud;

