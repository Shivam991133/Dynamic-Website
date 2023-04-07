const mongoose = require('mongoose')
const contact = mongoose.Schema({
    email:String,
    number:Number,
    query: String
})
module.exports = mongoose.model('query',contact)