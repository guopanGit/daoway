
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/daoway')

mongoose.connection.on('open', function () {
  console.log('ok');
})