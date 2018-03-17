
const mongoose = require('mongoose')

const shopsList = new mongoose.Schema({
  title:{type:String},
  orderCount:{type:Number},
  imgUrl:{type:String},
  positiveRate:{type:String},

},{
  collection:'shopLists'
  }

)

module.exports = mongoose.model('shopList', shopsList)