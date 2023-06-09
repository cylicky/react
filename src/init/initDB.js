const { dbConnection, seq } = require("../db/connect.js");
const user = require("../models/user");
const navigation = require("../models/navigation");
const subnavigation = require("../models/subnavigation");
const mainmenu = require("../models/menu");
const submenu = require("../models/submenu");
const download = require("../models/download");
const Log = require("../models/logs");
const intRoduction = require("../models/introduction");
const FAQ = require("../models/faq");

// A.hasOne(B); // A 有一个 B
// A.belongsTo(B); // A 属于 B
// A.hasMany(B); // A 有多个 B
// A.belongsToMany(B, { through: 'C' }); // A 属于多个 B , 通过联结表 C
// const initRelation = () => {
//   //导航和子导航关系：一对多
//   navigation.hasMany(navigationlist, {
//     // onDelete: "SET NULL",
//     foreignKey: "navigationid",
//     //CASCADE：父表delete、update的时候，子表会delete、update掉关联记录；
//     // SET NULL：父表delete、update的时候，子表会将关联记录的外键字段所在列设为null，所以注意在设计子表时外键不能设为not null；
//     // RESTRICT：如果想要删除父表的记录时，而在子表中有关联该父表的记录，则不允许删除父表中的记录；
//     // NO ACTION：同 RESTRICT，也是首先先检查外键；
//     // Set default：父表有变更时,子表将外键列设置成一个默认的值 但Innodb不能识别
//   });
const initRelation = () => {
  //导航和子导航关系：一对多
  // 子导航关联父
  navigation.hasMany(subnavigation, {
    foreignKey: "navigationid",
  });
  subnavigation.belongsTo(navigation, {
    foreignKey: "navigationid",
    onDelete: "SET NULL",
  });
  //  导航和 API 表链接
  // 就算主标删除 字表关联字段变空
  navigation.hasMany(intRoduction, {
    foreignKey: "navigationid",
  });
  intRoduction.belongsTo(navigation, {
    foreignKey: "navigationid",
    onDelete: "SET NULL",
  });

  // 导航和 log 表链接
  navigation.hasMany(Log, {
    foreignKey: "navigationid",
  });
  Log.belongsTo(navigation, {
    foreignKey: "navigationid",
    onDelete: "SET NULL",
  });
  // 导航和 download 表链接
  navigation.hasMany(download, {
    foreignKey: "navigationid",
  });
  download.belongsTo(navigation, {
    foreignKey: "navigationid",
    onDelete: "SET NULL",
  });
  // 导航和 FAQ 表链接
  navigation.hasMany(FAQ, {
    foreignKey: "navigationid",
  });
  FAQ.belongsTo(navigation, {
    foreignKey: "navigationid",
    onDelete: "SET NULL",
  });

  //  子导航和 API 表链接
  // 就算主标删除 字表关联字段变空
  subnavigation.hasMany(intRoduction, {
    foreignKey: "subnavigationid",
  });
  intRoduction.belongsTo(subnavigation, {
    foreignKey: "subnavigationid",
    onDelete: "SET NULL",
  });
  // 子导航和 log 表链接
  subnavigation.hasMany(Log, {
    foreignKey: "subnavigationid",
  });
  Log.belongsTo(subnavigation, {
    foreignKey: "subnavigationid",
    onDelete: "SET NULL",
  });
  // 子导航和 download 表链接
  subnavigation.hasMany(download, {
    foreignKey: "subnavigationid",
  });
  download.belongsTo(subnavigation, {
    foreignKey: "subnavigationid",
    onDelete: "SET NULL",
  });
  // 子导航和 FAQ 表链接
  subnavigation.hasMany(FAQ, {
    foreignKey: "subnavigationid",
  });
  FAQ.belongsTo(subnavigation, {
    foreignKey: "subnavigationid",
    onDelete: "SET NULL",
  });

  //菜单和子菜单关系 一对多
  mainmenu.hasMany(submenu, {
    // onDelete: "SET NULL",
    foreignKey: "menuid",
  });
  submenu.belongsTo(mainmenu, {
    foreignKey: "menuid",
    onDelete: "SET NULL",
  });
  //菜单和子菜单关系 一对多
  mainmenu.hasMany(download, {
    // onDelete: "SET NULL",
    foreignKey: "menuid",
  });
  download.belongsTo(mainmenu, {
    foreignKey: "menuid",
    onDelete: "SET NULL",
  });
  mainmenu.hasMany(intRoduction, {
    foreignKey: "menuid",
  });
  intRoduction.belongsTo(mainmenu, {
    foreignKey: "menuid",
    onDelete: "SET NULL",
  });
  mainmenu.hasMany(Log, {
    foreignKey: "menuid",
  });
  Log.belongsTo(mainmenu, {
    foreignKey: "menuid",
    onDelete: "SET NULL",
  });
  mainmenu.hasMany(download, {
    foreignKey: "menuid",
  });
  download.belongsTo(mainmenu, {
    foreignKey: "menuid",
    onDelete: "SET NULL",
  });
  mainmenu.hasMany(FAQ, {
    foreignKey: "menuid",
  });
  FAQ.belongsTo(mainmenu, {
    foreignKey: "menuid",
    onDelete: "SET NULL",
  });

  // 子菜单 API 介绍
  submenu.hasMany(intRoduction, {
    foreignKey: "submenuid",
  });
  intRoduction.belongsTo(submenu, {
    foreignKey: "submenuid",
    onDelete: "SET NULL",
  });
  submenu.hasMany(Log, {
    foreignKey: "submenuid",
  });
  Log.belongsTo(submenu, {
    foreignKey: "submenuid",
    onDelete: "SET NULL",
  });
  submenu.hasMany(download, {
    foreignKey: "submenuid",
  });
  download.belongsTo(submenu, {
    foreignKey: "submenuid",
    onDelete: "SET NULL",
  });
  submenu.hasMany(FAQ, {
    foreignKey: "submenuid",
  });
  FAQ.belongsTo(submenu, {
    foreignKey: "submenuid",
    onDelete: "SET NULL",
  });
};
const initDB = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      // 链接数据库
      await dbConnection();
      initRelation();
      // 指定同步某一个模型
      //await User.sync({ alter: true });
      // 同步所有模型和关系
      await seq.sync({ alter: true });
      resolve();
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
module.exports = initDB;
