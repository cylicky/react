// 日志
const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

const Logs = seq.define(
  "logs",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // submenuname: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc: {
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

module.exports = Logs;
