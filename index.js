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
      // console.log(list)
    }
  })
})
app.get('/serviceItem', (req, res) => {
  const page = req.query.page
  // 分页查询公式
  // find().limit(每页显示条数).skip((页数-1)*(每页显示条数)).exec

  serviceItem.find({}).limit(10).skip((page-1)*10).exec((err, list) => {
    if (!err) {
      res.send({data:list})
      console.log(list.length);
    }
  })

})

app.listen(3000, () => {
  console.log('3000 ~服务器链接成功~~~');
})