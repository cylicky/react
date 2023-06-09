// API 内容
const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

const conTent = seq.define(
  "content",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    submenuname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
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

module.exports = conTent;
