// 子菜单
const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

// 对应数据库中demo表的字段
const subMenu = seq.define(
  "submenu",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      // type: Sequelize.STRING(255),
      type: DataTypes.STRING,
      allowNull: false,
    },
    // menuname: {
    //   // type: Sequelize.STRING(255),
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    // 启用时间戳
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = subMenu;
