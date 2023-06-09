// 菜单
const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

const Menu = seq.define(
  "menu",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // 启用时间戳
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Menu;
