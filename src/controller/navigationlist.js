const Subnavigation = require("../models/subnavigation");
const Navigation = require("../models/navigation");
const {
  validatedel,
  validateUpdate,
  validateAdd,
} = require("../uitls/validate/all.validate");
const HttpException = require("../anomaly/http.anomaly");

async function handleNav(data) {
  // const { type } = data.navigation;
  let datanew = {
    id: data.dataValues.id,
    type: data.dataValues.type,
    createdAt: data.dataValues.createdAt,
    updatedAt: data.dataValues.updatedAt,
    navigationid: data.dataValues.navigationid,
    navigationtype: data.navigation.type,
  };

  //  console.log("type1", type);
  //console.log("type", data.navigation.type);
  return datanew;
}
async function handleArticles(Nav) {
  let data = {
    id: Nav.dataValues.id,
    type: Nav.dataValues.type,
    // createdAt: 2023-05-13T07:07:32.000Z,
    // updatedAt: 2023-05-13T07:07:32.000Z,
    navigationid: Nav.dataValues.navigationid,
    navigation: Nav.dataValues.navigation
      ? Nav.dataValues.navigation.dataValues.type
      : Nav.dataValues.navigation,
  };
  return data;
}
// 添加 修改
module.exports.saveOrUpdate = async (req, res, next) => {
  try {
    // 获取请求数据
    let { id, type, navigationid } = req.body;
    id = String(id).replace(/\s+/g, "");
    if (id) {
      //修改
      // 校验数据
      let { error, validate } = validateUpdate(id, type);
      if (!validate) {
        throw new HttpException(422, "数据格式有问题", error);
      }
      //修改数据是否存在
      let navItem = await Subnavigation.findByPk(id);
      if (!navItem) {
        throw new HttpException(422, "不存在", "nonexistence");
      }
      type = type ? type : navItem.dataValues.type;
      navigationid = navigationid
        ? navigationid
        : navItem.dataValues.navigationid;
      navItem = await Subnavigation.update(
        { type, navigationid },
        { where: { id } }
      );

      return navItem[0] > 0
        ? res.status(200).json({
            code: 0,
            message: "更新成功",
          })
        : res.status(200).json({
            code: 0,
            message: "更新失败",
          });
    } else {
      // 新增
      // 校验数据
      let { error, validate } = validateAdd(type, navigationid);
      if (!validate) {
        throw new HttpException(422, "数据格式有问题", error);
      }
      //判断是否已经存在
      let Navitem = await Subnavigation.findOne({ where: { type } });
      if (Navitem) {
        throw new HttpException(
          422,
          "子导航栏已经存在",
          "The navigation bar already exists"
        );
      }
      Navitem = await Subnavigation.create({ type, navigationid });
      return res.status(200).json({
        code: 0,
        message: "添加导航成功",
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
    console.log(id, "id");
    // 校验数据
    let { error, validate } = validatedel(id);
    console.log(error, validate);
    if (!validate) {
      throw new HttpException(422, "数据格式有问题", error);
    }
    //查询要删除的字段是否存在
    let Nav = await Subnavigation.findByPk(id);
    if (!Nav) {
      throw new HttpException(422, "不存在", "nonexistence");
    }
    Nav = await Subnavigation.destroy({
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
// 查询所有获取
module.exports.getAll = async (req, res, next) => {
  try {
    const { limit = 20, offset = 0 } = req.query;
    let NavList = await Subnavigation.findAndCountAll({
      distinct: true,
      // 查询父表，只要某一个字段
      include: {
        model: Navigation,
        attributes: ["type"],
      },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    //   console.log("NavList", NavList);
    // 数据转换
    let navitem = [];
    for (const t of NavList.rows) {
      let dataNew = {
        id: t.dataValues.id,
        type: t.dataValues.type,
        // createdAt: 2023-05-13T07:07:32.000Z,
        // updatedAt: 2023-05-13T07:07:32.000Z,
        navigationid: t.dataValues.navigationid,
        navigationtype: t.dataValues.navigation
          ? t.dataValues.navigation.dataValues.type
          : t.dataValues.navigation,
      };
      navitem.push(dataNew);
    }

    return res.status(200).json({
      code: 0,
      message: "获取成功",
      data: {
        rows: navitem,
        count: NavList.count,
      },
    });
  } catch (error) {
    next(error);
  }
};
