const Logs = require("../models/logs");
const subMenu = require("../models/submenu");
const { validatedel } = require("../uitls/validate/all.validate");
const { logscreate } = require("../uitls/validate/logs.validate");
const HttpException = require("../anomaly/http.anomaly");
// 日志添加 修改
module.exports.saveOrUpdate = async (req, res, next) => {
  try {
    // 获取请求数据
    let { id, color, desc, submenuid, subnavigationid, menuid, navigationid } =
      req.body;
    if (id) {
      let logs = await Logs.findOne({ where: { id } });
      if (!logs) {
        throw new HttpException(
          422,
          "日志不存在",
          "The navigation bar does not exist"
        );
      }
      color = color ? color : logs.dataValues.color;
      desc = desc ? desc : logs.dataValues.desc;
      submenuid = submenuid ? submenuid : logs.dataValues.submenuid;
      subnavigationid = subnavigationid
        ? subnavigationid
        : logs.dataValues.subnavigationid;
      menuid = menuid ? menuid : logs.dataValues.menuid;
      navigationid = navigationid ? navigationid : logs.dataValues.navigationid;

      // 修改传入进来的值
      logs = await Logs.update(
        { color, desc, submenuid, subnavigationid, menuid, navigationid },
        { where: { id } }
      );
      console.log("logs", logs);
      return logs[0] > 0
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
      let { error, validate } = logscreate(desc);
      if (!validate) {
        throw new HttpException(422, "数据格式有问题", error);
      }

      let Nav = await Logs.create({ color, desc, submenuid });
      return res.status(200).json({
        code: 0,
        message: "添加日志成功",
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
    // 校验数据
    let { error, validate } = validatedel(id);
    if (!validate) {
      throw new HttpException(422, "数据格式有问题", error);
    }
    //查询要删除的字段是否存在
    let logs = await Logs.findByPk(id);
    if (!logs) {
      throw new HttpException(422, "不存在", "nonexistence");
    }
    logs = await Logs.destroy({
      //   truncate: true,  截断
      where: {
        id,
      },
    });

    return logs > 0
      ? res.status(200).json({
          code: 0,
          message: "删除日志成功",
          data: logs,
        })
      : res.status(200).json({
          code: 0,
          message: "数据库删除日志失败",
          data: logs,
        });
  } catch (error) {
    next(error);
  }
};
// 查询
module.exports.getAll = async (req, res, next) => {
  try {
    let { limit = 5, offset = 0 } = req.body;
    let logs = await Logs.findAndCountAll({
      include: { model: subMenu, attributes: ["type"] },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    // 数据转换
    let logsArrory = [];
    for (const t of logs.rows) {
      let datanew = {
        id: t.dataValues.id,
        color: t.dataValues.color,
        desc: t.dataValues.desc,
        submenuid: t.dataValues.submenuid,
        submenutype: t.dataValues.submenu
          ? t.dataValues.submenu.type
          : t.dataValues.submenu,
      };
      logsArrory.push(datanew);
    }
    return res.status(200).json({
      code: 0,
      message: "获取成功",
      data: {
        logs: logsArrory,
        count: logs.count,
      },
    });
  } catch (error) {
    next(error);
  }
};
