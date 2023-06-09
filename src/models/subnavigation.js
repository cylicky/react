const { DataTypes, Sequelize } = require("sequelize");
const { seq } = require("../db/connect.js");

//子导航栏;
const Subnavigation = seq.define(
  "subnavigation",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    // navigationname: {
    //   type: DataTypes.STRING,
    //   // allowNull: false,
    // },
  },
  {
    // 启用时间戳
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = Subnavigation;
