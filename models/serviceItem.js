
const mongoose = require('mongoose')

const serviceItem = new mongoose.Schema({
  iconUrl:{type:String},
  area:{type:String},
  city:{type:String},
  comment:{type:String},
  createtime:{type:Number},
  nick:{type:String},
  star:{type:Number},

},{
  collection:'serviceItems'
})

module.exports = mongoose.model('serviceItem', serviceItem)