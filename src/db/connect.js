const { Sequelize } = require("sequelize");
const config = require("../config/index.js");
const { MySQL_DB, MYSQL_USER, MySQL_PWD, MySQL_HOST, MySQL_PORT } = config;
console.log(MySQL_DB, MYSQL_USER, MySQL_PWD, MySQL_HOST, MySQL_PORT);
const seq = new Sequelize(MySQL_DB, MYSQL_USER, MySQL_PWD, {
  host: MySQL_HOST,
  dialect: "mysql", // 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一
  port: MySQL_PORT,
  logging: false,
  define: {
    freezeTableName: true, // 强制表名称等于模型名称
  },
});
const dbConnection = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await seq
        .authenticate()
        .then((res) => {
          console.log("数据库链接成功");
          resolve();
        })
        .catch((error) => {
          console.log("数据库链接失败" + error);
          reject();
        });
    } catch (error) {
      console.log(error);
      reject();
    }
  });
};
// try {
//   await seq.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

module.exports = { seq, dbConnection };
