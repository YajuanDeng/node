const express = require('express');
const cors = require('cors')

const app = express()

//导入创建的router模块
const router = require('./router');
//一定要在路由之前配置cors中间件，从而解决接口跨域问题
app.use(cors());
app.use(express.json());
app.use('/api',router)

app.listen(80,function(){
  console.log('Sever is Running on http://127.0.0.1:80');
})