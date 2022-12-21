const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortURLSchema = new Schema({
  URLId: {
    type: String,
    require: true
  },
  originURL: {
    type: String
  }
}) 

module.exports = mongoose.model('shortURL', shortURLSchema)
