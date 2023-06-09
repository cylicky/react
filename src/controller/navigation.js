const Navigation = require("../models/navigation");
const Subnavigation = require("../models/subnavigation");
const {
  validatecreate,
  validatedelete,
  validateupdate,
} = require("../uitls/validate/navigation.validate");
const HttpException = require("../anomaly/http.anomaly");
// 添加修改
module.exports.saveOrUpdate = async (req, res, next) => {
  try {
    // 获取请求数据
    let { id, type } = req.body;
    id = String(id).replace(/\s+/g, "");

    if (id) {
      // 修改
      // 校验数据
      let { error, validate } = validateupdate(id, type);
      if (!validate) {
        throw new HttpException(422, "数据格式有问题", error);
      }
      //查询要删除的字段是否存在
      let Nav = await Navigation.findByPk(id);
      if (!Nav) {
        throw new HttpException(422, "不存在", "nonexistence");
      }
      type = type ? type : Nav.dataValues.type;
      Nav = await Navigation.update({ type }, { where: { id } });
      return Nav[0] > 0
        ? res.status(200).json({
            code: 0,
            message: "更新成功",
          })
        : res.status(200).json({
            code: 0,
            message: "更新失败",
          });
    } else {
      //添加
      // 校验数据
      let { error, validate } = validatecreate(type);
      if (!validate) {
        throw new HttpException(422, "数据格式有问题", error);
      }
      //创建成功后就返回.创建token和返回数据
      let Nav = await Navigation.findOne({ where: { type } });
      if (Nav) {
        throw new HttpException(
          422,
          "导航栏已经存在",
          "The navigation bar already exists"
        );
      }
      Nav = await Navigation.create({ type });
      return res.status(200).json({
        code: 0,
        message: "添加导航成功",
      });
    }
  } catch (error) {
    next(error);
  }
};

//修改
module.exports.updates = async (req, res, next) => {
  try {
    // 获取请求数据
    let { id, type } = req.body;
    id = id.replace(/\s+/g, "");
    // 校验数据
    let { error, validate } = validateupdate(id, type);
    if (!validate) {
      throw new HttpException(422, "数据格式有问题", error);
    }
    //查询要删除的字段是否存在
    let Nav = await Navigation.findByPk(id);
    if (!Nav) {
      throw new HttpException(422, "不存在", "nonexistence");
    }
    // 没有传值进来或者是空
    if (type.replace(/\s+/g, "") == "") {
      Nav = await Navigation.update(
        { type: Nav.dataValues.type },
        { where: { id } }
      );
      return res.status(200).json({
        code: 0,
        message: "更新成功1",
        data: Nav,
      });
    } else {
      // 修改传入进来的值
      Nav = await Navigation.update({ type }, { where: { id } });
      return res.status(200).json({
        code: 0,
        message: "更新成功2",
        data: Nav,
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
    let Nav = await Navigation.findByPk(id);
    if (!Nav) {
      throw new HttpException(422, "不存在", "nonexistence");
    }
    Nav = await Navigation.destroy({
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

//
module.exports.getAll = async (req, res, next) => {
  let { limit = 25, offset = 0 } = req.body;
  let Nav = await Navigation.findAndCountAll({
    limit: parseInt(limit),
    offset: parseInt(offset),
  });
  return res.status(200).json({
    code: 0,
    message: "获取成功",
    data: Nav,
  });
};

// 获取所有主
module.exports.getAllList = async (req, res, next) => {
  try {
    // 获取请求数据
    //let { id } = req.body;
    // 校验数据
    // let { error, validate } = validatedelete(id);
    // console.log("jieguo ", error, validate, id);
    // if (!validate) {
    //   throw new HttpException(422, "数据格式有问题", error);
    // }
    //查询要删除的字段是否存在
    // let Nav = await Navigation.findByPk(id);
    // if (!Nav) {
    //   throw new HttpException(422, "不存在", "nonexistence");
    // }

    let Nav = await Navigation.findAll();
    let nav = [];
    for (const t of Nav) {
      // console.log("t", t.dataValues);
      let navitem = await Subnavigation.findAll({
        where: { navigationId: t.dataValues.id },
      });
      let navitems = [];
      for (const t of navitem) {
        navitems.push(t.dataValues);
      }
      nav.push({ name: t.dataValues, items: navitems });
    }

    return res.status(200).json({
      code: 0,
      message: "获取成功",
      data: nav,
    });
  } catch (error) {
    next(error);
  }
};
