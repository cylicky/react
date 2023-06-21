const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const multer = require("multer");
const initDB = require("./src/init/initDB.js");
const initServer = require("./src/init/initServe.js");
const initRoute = require("./src/init/initRoute");
const noMatchMiddleware = require("./src/middleware/404.middleware");
const errorMatchMiddleware = require("./src/middleware/error.middleware");

// 初始化服务
const app = express();

const main = async () => {
  // 解析JSON数据 数据解析中间件需要在路由之前调用
  //cors 跨域     morgan 请求日志
  app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }));
  app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cors({ credentials: true, origin: true }))
    .use(morgan("tiny"));
  // 静态资源文件
  app.use("/status", express.static("public"));
  // 静态资源存储
  //http://localhost:3600/status/images/photo-1687338941647.png
  // 初始化路由
  initRoute(app);
  // 中间件 自定义中间件 错误处理中间件
  app.use(noMatchMiddleware).use(errorMatchMiddleware);

  // 启动链接数据库
  await initDB();
  console.log("数据库成功运行完");

  await initServer(app);
};
main();
