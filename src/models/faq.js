// 问题
const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

const FAQ = seq.define(
  "faq",
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
    problem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // 启用时间戳
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = FAQ;
