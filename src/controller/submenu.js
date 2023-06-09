const subMenu = require("../models/submenu");
const HttpException = require("../anomaly/http.anomaly");
const { validateAdd, validatedel } = require("../uitls/validate/all.validate");
const mainMenu = require("../models/menu");
//重复代码抽离
function handleSub(sub) {
  const newTags = [];
  for (const t of article.dataValues.tags) {
    newTags.push(t.label);
  }
  article.dataValues.tags = newTags;

  return article.dataValues;
}
// 创建修改
module.exports.saveOrUpdate = async (req, res, next) => {
  try {
    // 获取请求数据
    let { id, type, menuid } = req.body;
    if (id) {
      let sub = await subMenu.findOne({ where: { id } });
      if (!sub) {
        throw new HttpException(
          422,
          "子菜单不存在",
          "The navigation bar does not exist"
        );
      }
      type = type ? type : sub.dataValues.type;
      menuid = menuid ? menuid : sub.dataValues.menuid;
      // 修改传入进来的值
      sub = await subMenu.update({ type, menuid }, { where: { id } });

      return sub[0] > 0
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
      let { error, validate } = validateAdd(type, menuid);
      if (!validate) {
        throw new HttpException(422, "数据格式有问题", error);
      }
      // 是否已添加
      let sub = await subMenu.findOne({ where: { type, menuid } });
      if (sub) {
        throw new HttpException(
          422,
          "已经存在",
          "The navigation bar already exists"
        );
      }
      sub = await subMenu.create({ type, menuid });
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
    let { error, validate } = validatedel(id);
    if (!validate) {
      throw new HttpException(422, "数据格式有问题", error);
    }
    console.log("id", id);
    //查询要删除的字段是否存在
    let Nav = await subMenu.findByPk(id);
    console.log(Nav);
    if (!Nav) {
      throw new HttpException(422, "不存在", "nonexistence");
    }
    Nav = await subMenu.destroy({
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
    let { limit = 10, offset = 0 } = req.body;
    // console.log("mainmenuid", mainmenuid);
    let sub = await subMenu.findAndCountAll({
      // where: { mainmenuid },
      // 查询父表，只要某一个字段
      include: {
        model: mainMenu,
        attributes: ["type"],
      },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    // 数据转换
    let submenu = [];
    for (const t of sub.rows) {
      let datanew = {
        id: t.dataValues.id,
        type: t.dataValues.type,
        // createdAt: t.dataValues.createdAt,
        // updatedAt: t.dataValues.updatedAt,
        menuid: t.dataValues.menuid,
        menu: t.dataValues.menu
          ? t.dataValues.menu.type
          : t.dataValues.menu.type,
      };
      submenu.push(datanew);
    }
    return res.status(200).json({
      code: 0,
      message: "获取成功",
      data: {
        rows: submenu,
        count: sub.count,
      },
    });
  } catch (error) {
    next(error);
  }
};
