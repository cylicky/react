const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

const User = seq.define("user", {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  // 在这里定义模型属性
  emaile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    // allowNull 默认为 true
  },
});

module.exports = User;
