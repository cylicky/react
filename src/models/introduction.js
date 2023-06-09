// 简介
const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

const introDuction = seq.define(
  "introduction",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // submenuname: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
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

module.exports = introDuction;
