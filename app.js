// app.js
const express = require('express');
const app = express();
const port = 3000;

// 使用 express.json() 中间件来解析 JSON 格式的请求体
app.use(express.json());

// 引入 receiveRoute.js 路由
const route = require('./src/routes/apiRoutes.js');

// 使用 receiveRoute 路由
app.use('/api', route);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});