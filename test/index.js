
require('../tools/db')

const ShopModel = require('../models/Shop')

ShopModel.find({},function (err, data) {
  if(!err){
    console.log(data);
  }
})