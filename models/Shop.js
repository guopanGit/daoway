
const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  serviceIndex:{type:String},
  serviceType:{type:Array},
  shopList:{type:Array},
})

module.exports = mongoose.model('shop', shopSchema)