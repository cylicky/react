const mainMenu = require("../models/menu");
const {
  validatecreate,
  validatedelete,
} = require("../uitls/validate/navigation.validate");
const HttpException = require("../anomaly/http.anomaly");
// 创建 修改
module.exports.saveOrUpdate = async (req, res, next) => {
  try {
    // 获取请求数据
    let { id, type } = req.body;
    if (id) {
      let menu = await mainMenu.findOne({ where: { id } });
      if (!menu) {
        throw new HttpException(
          422,
          "导航栏不已经存在",
          "The navigation bar does not exist"
        );
      }
      type = type ? type : navItem.dataValues.type;
      menu = await mainMenu.update({ type }, { where: { id } });
      return menu[0] > 0
        ? res.status(200).json({
            code: 0,
            message: "更新成功",
          })
        : res.status(200).json({
            code: 0,
            message: "更新失败",
          });
    } else {
      // 校验数据
      let { error, validate } = validatecreate(type);
      if (!validate) {
        throw new HttpException(422, "数据格式有问题", error);
      }
      // 是否已添加
      let menu = await mainMenu.findOne({ where: { type } });
      if (menu) {
        throw new HttpException(
          422,
          "导航栏已经存在",
          "The navigation bar already exists"
        );
      }
      menu = await mainMenu.create({ type });
      return res.status(200).json({
        code: 0,
        message: "添加成功",
      });
    }
  } catch (error) {
    next(error);
  }
};

// 删除
module.exports.del = async (req, res, next) => {
  try {
    // 获取请求数据
    let { id } = req.body;
    id = String(id).replace(/\s+/g, "");
    // 校验数据
    let { error, validate } = validatedelete(id);
    if (!validate) {
      throw new HttpException(422, "数据格式有问题", error);
    }
    //查询要删除的字段是否存在
    let Nav = await mainMenu.findByPk(id);
    if (!Nav) {
      throw new HttpException(422, "不存在", "nonexistence");
    }
    Nav = await mainMenu.destroy({
      //   truncate: true,  截断
      where: {
        id,
      },
    });
    return res.status(200).json({
      code: 0,
      message: "删除成功",
      data: Nav,
    });
  } catch (error) {
    next(error);
  }
};

// 获取
module.exports.getAll = async (req, res, next) => {
  try {
    // 获取值
    let { limit = 15, offset = 0 } = req.body;
    console.log("heihei ");
    let menu = await mainMenu.findAndCountAll({
      // distinct: true,
      // 查询父表，只要某一个字段
      // include: {
      //   model: Subnavigation,
      //   attributes: ["type"],
      // },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    // let menumain = [];
    // for (const t of menu.rows) {
    //   let dataNew = {
    //     id: t.dataValues.id,
    //     type: t.dataValues.type,
    //     // createdAt: 2023-05-13T07:07:32.000Z,
    //     // updatedAt: 2023-05-13T07:07:32.000Z,
    //     navigationlistid: t.dataValues.navigationlistid,
    //     navigationlisttype: t.dataValues.navigationlist
    //       ? t.dataValues.navigationlist.dataValues.type
    //       : t.dataValues.navigationlist,
    //   };
    //   menumain.push(dataNew);
    // }

    return res.status(200).json({
      code: 0,
      message: "获取成功",
      date: menu,
    });
  } catch (error) {
    next(error);
  }
};
