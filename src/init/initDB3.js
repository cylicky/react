const { dbConnection, seq } = require("../db/connect.js");
const user = require("../models/user");
const navigation = require("../models/navigation");
const subnavigation = require("../models/subnavigation");
const mainmenu = require("../models/menu");
const submenu = require("../models/submenu");
const download = require("../models/download");
const Log = require("../models/logs");
const intRoduction = require("../models/introduction");
const FQA = require("../models/faq");
const conTent = require("../models/content");

// A.hasOne(B); // A 有一个 B
// A.belongsTo(B); // A 属于 B
// A.hasMany(B); // A 有多个 B
// A.belongsToMany(B, { through: 'C' }); // A 属于多个 B , 通过联结表 C
// const initRelation = () => {
//   //导航和子导航关系：一对多
//   navigation.hasMany(subnavigation, {
//     // onDelete: "SET NULL",
//     foreignKey: "navigationid",
//     //CASCADE：父表delete、update的时候，子表会delete、update掉关联记录；
//     // SET NULL：父表delete、update的时候，子表会将关联记录的外键字段所在列设为null，所以注意在设计子表时外键不能设为not null；
//     // RESTRICT：如果想要删除父表的记录时，而在子表中有关联该父表的记录，则不允许删除父表中的记录；
//     // NO ACTION：同 RESTRICT，也是首先先检查外键；
//     // Set default：父表有变更时,子表将外键列设置成一个默认的值 但Innodb不能识别
//   });
//   subnavigation.belongsTo(navigation);
//   //自导航和菜单  一对多
//   subnavigation.hasMany(mainmenu, {
//     // onDelete: "SET NULL",
//     foreignKey: "subnavigationid",
//   });
//   mainmenu.belongsTo(subnavigation);
//   // 菜单和子菜单关系 一对多
//   mainmenu.hasMany(submenu, {
//     // onDelete: "SET NULL",
//     foreignKey: "mainmenuid",
//   });
//   submenu.belongsTo(mainmenu);
//   // 子菜单对应下载 一对多
//   submenu.hasMany(download, {
//     foreignKey: "submenuid",
//   });
//   download.belongsTo(mainmenu);
//   submenu.hasMany(Log, {
//     foreignKey: "submenuid",
//   });
//   download.belongsTo(submenu);
//   submenu.hasMany(intRoduction, {
//     foreignKey: "submenuid",
//   });
//   intRoduction.belongsTo(submenu);
//   submenu.hasMany(Faq, {
//     foreignKey: "submenuid",
//   });
//   Faq.belongsTo(submenu);
// };
const initRelation = () => {
  //导航和子导航关系：一对多
  navigation.hasMany(subnavigation, {
    foreignKey: "navigationid",
  });
  // 子导航关联父
  subnavigation.belongsTo(navigation, {
    foreignKey: "navigationid",
    onDelete: "SET NULL",
  });

  //子导航和菜单  一对多
  subnavigation.hasMany(mainmenu, {
    foreignKey: "subnavigationid",
  });
  mainmenu.belongsTo(subnavigation, {
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

  // 子菜单对应下载 一对多
  submenu.hasMany(download, {
    foreignKey: "submenuid",
  });
  download.belongsTo(submenu, {
    foreignKey: "submenuid",
    onDelete: "SET NULL",
  });

  // 日志 一对多
  submenu.hasMany(Log, {
    foreignKey: "submenuid",
  });
  Log.belongsTo(submenu, {
    foreignKey: "submenuid",
    onDelete: "SET NULL",
  });

  // 简介
  submenu.hasMany(intRoduction, {
    foreignKey: "submenuid",
  });
  intRoduction.belongsTo(submenu, {
    foreignKey: "submenuid",
    onDelete: "SET NULL",
  });

  // 常见问题
  submenu.hasMany(FQA, {
    foreignKey: "submenuid",
  });
  FQA.belongsTo(submenu, {
    foreignKey: "submenuid",
    onDelete: "SET NULL",
  });
  // API 内容
  submenu.hasMany(conTent, {
    foreignKey: "submenuid",
  });
  conTent.belongsTo(submenu, {
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
      //await User.sync({ alter: true });

      // 同步所有模型和关系
      await seq.sync({ alter: true });
      // await user.sync({ alter: true });
      // await navigation.sync({ alter: true });
      // await subnavigation.sync({ alter: true });
      // await mainmenu.sync({ alter: true });
      // await submenu.sync({ alter: true });
      resolve();
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
module.exports = initDB;
