const intRoduction = require("../models/introduction");
const subMenu = require("../models/submenu");
const { validatedel } = require("../uitls/validate/all.validate");
const HttpException = require("../anomaly/http.anomaly");
// 添加 修改
module.exports.saveOrUpdate = async (req, res, next) => {
  try {
    let { id, title, desc, submenuid, subnavigationid, menuid, navigationid } =
      req.body;
    if (id) {
      // 修改
      // 校验数据
      let { error, validate } = validatedel(id);
      if (!validate) {
        throw new HttpException(422, "数字不带任何符号", error);
      }
      let detailed = await intRoduction.findOne({ where: { id } });
      if (!detailed) {
        throw new HttpException(422, "不存在", " not exist");
      }
      title = title ? title : detailed.dataValues.title;
      desc = desc ? desc : detailed.dataValues.desc;
      submenuid = submenuid ? submenuid : detailed.dataValues.submenuid;
      subnavigationid = subnavigationid
        ? subnavigationid
        : down.dataValues.subnavigationid;
      menuid = menuid ? menuid : down.dataValues.menuid;
      navigationid = navigationid ? navigationid : down.dataValues.navigationid;
      // 修改传入进来的值
      detailed = await intRoduction.update(
        { title, desc, submenuid },
        { where: { id } }
      );

      return detailed[0] > 0
        ? res.status(200).json({
            code: 0,
            message: "更新成功",
          })
        : res.status(200).json({
            code: 0,
            message: "更新失败",
          });
    } else {
      // 添加
      let detailed = await intRoduction.create({
        title,
        desc,
        submenuid,
        subnavigationid,
        menuid,
        navigationid,
      });

      return detailed
        ? res.status(200).json({
            code: 0,
            message: "添加成功",
          })
        : res.status(200).json({
            code: 0,
            message: "添加失败",
          });
    }
  } catch (error) {
    next(error);
  }
};
// 删除
module.exports.del = async (req, res, next) => {
  try {
    let { id } = req.body;
    // 校验数据
    let { error, validate } = validatedel(id);
    if (!validate) {
      throw new HttpException(422, "数字不带任何符号", error);
    }
    //查询要删除的字段是否存在
    let detailed = await intRoduction.findByPk(id);
    if (!detailed) {
      throw new HttpException(422, "不存在", "nonexistence");
    }
    detailed = await intRoduction.destroy({
      //   truncate: true,  截断
      where: {
        id,
      },
    });
    return detailed > 0
      ? res.status(200).json({
          code: 0,
          message: "删除成功",
        })
      : res.status(200).json({
          code: 0,
          message: "删除失败",
        });
  } catch (error) {
    next(error);
  }
};
//查询
module.exports.getAll = async (req, res, next) => {
  try {
    let { limit = 5, offset = 0 } = req.body;
    let Apidate = await intRoduction.findAndCountAll({
      //include: { model: subMenu, attributes: ["type"] },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    // 数据转换
    let ApiArrory = [];
    for (const t of Apidate.rows) {
      let datanew = {
        id: t.dataValues.id,
        title: t.dataValues.title,
        desc: t.dataValues.desc,
        submenuid: t.dataValues.submenuid,
        submenutype: t.dataValues.submenu
          ? t.dataValues.submenu.type
          : t.dataValues.submenu,
      };
      ApiArrory.push(t);
    }
    return res.status(200).json({
      code: 0,
      message: "获取成功",
      data: {
        api: Apidate.rows,
        count: Apidate.count,
      },
    });
  } catch (error) {
    next(error);
  }
};
