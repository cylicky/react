// 图片
const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

const Pic = seq.define(
  "pic",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    picurl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // 启用时间戳
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Pic;
