const routeruser = require("../routes/users");
const navigationRouter = require("../routes/navigation");
const navigationlistRouter = require("../routes/navigationlist");
const mainmenuRouter = require("../routes/mainmenu");
const submenuRouter = require("../routes/submenu");
const logsRouter = require("../routes/logs");
const downloadRouter = require("../routes/download");
const faqRouter = require("../routes/faq");
const introductionRouter = require("../routes/introduction");
const contentRouter = require("../routes/content");
const initRoute = async (app) => {
  app.use("/api/v1/user", routeruser); // 用户
  app.use("/api/v1/navigation", navigationRouter); // 导航
  app.use("/api/v1/navigationlist", navigationlistRouter); // 子导航
  app.use("/api/v1/mainmenu", mainmenuRouter); // 菜单
  app.use("/api/v1/submenu", submenuRouter); // 二级菜单
  app.use("/api/v1/logs", logsRouter); // 日志
  app.use("/api/v1/download", downloadRouter); // 下载
  app.use("/api/v1/faq", faqRouter); // 问题
  app.use("/api/v1/introduction", introductionRouter); // 介绍
  app.use("/api/v1/content", contentRouter); // API内容
};
module.exports = initRoute;
