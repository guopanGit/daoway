let express = require('express')
let app = express()
app.use(express.static('public'))


require('./tools/db')

const ShopModel = require('./models/Shop')

app.get('/shopList', function (req, res) {
  ShopModel.find({}, function (err, list) {
    if (!err) {
      res.send({list:list})
    }
  })
})

app.listen(3000, () => {
  console.log('3000 ~服务器链接成功~~~');
})