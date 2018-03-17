let express = require('express')
let app = express()
app.use(express.static('public'))


require('./tools/db')

const ShopModel = require('./models/Shop')
const shopsList = require('./models/shops')
const serviceItem = require('./models/serviceItem')

app.get('/shopList', (req, res) => {
  ShopModel.find({}, (err, list) => {
    if (!err) {
      res.send({list})
    }
  })
})
app.get('/shopsList', (req, res) => {
  shopsList.find({}, (err, list) => {
    if (!err) {
      res.send({data:list})
    }
  })
})
app.get('/serviceItem', (req, res) => {
  serviceItem.find({}, (err, list) => {
    if (!err) {
      res.send({data:list})
      console.log(list);
    }
  })
})

app.listen(3000, () => {
  console.log('3000 ~服务器链接成功~~~');
})