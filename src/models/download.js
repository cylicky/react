// 下载
const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

const Download = seq.define(
  "download",
  {
    id: {
      // ID
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      //分类
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      // 下载文件包名
      type: DataTypes.STRING,
      allowNull: false,
    },
    // sdkname: {
    //   // 包名称
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // description: {
    //   // 下载说明
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    download: {
      // 下载地址
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

module.exports = Download;
