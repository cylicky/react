const downLoads = require("../models/download");
const subMenu = require("../models/submenu");
const { validatedelete } = require("../uitls/validate/all.validate");
const { addCreate } = require("../uitls/validate/download.validate");
const HttpException = require("../anomaly/http.anomaly");

// 下载添加
module.exports.saveOrUpdate = async (req, res, next) => {
  try {
    // 获取请求数据
    let {
      id,
      type,
      title,
      description,
      download,
      submenuid,
      subnavigationid,
      menuid,
      navigationid,
    } = req.body;
    if (id) {
      console.log("12");
      let down = await downLoads.findOne({ where: { id } });
      if (!down) {
        throw new HttpException(
          422,
          "不存在",
          "The navigation bar does not exist"
        );
      }
      type = type ? type : down.dataValues.type;
      title = title ? title : down.dataValues.title;
      download = download ? download : down.dataValues.download;
      submenuid = submenuid ? submenuid : down.dataValues.submenuid;
      description = description ? description : down.dataValues.description;
      subnavigationid = subnavigationid
        ? subnavigationid
        : down.dataValues.subnavigationid;
      menuid = menuid ? menuid : down.dataValues.menuid;
      navigationid = navigationid ? navigationid : down.dataValues.navigationid;
      down = await downLoads.update(
        {
          type,
          title,
          download,
          submenuid,
          description,
          subnavigationid,
          menuid,
          navigationid,
        },
        { where: { id } }
      );
      return down[0] > 0
        ? res.status(200).json({
            code: 0,
            message: "修改成功",
          })
        : res.status(200).json({
            code: 0,
            message: "修改失败",
          });
    } else {
      // 校验数据
      let { error, validate } = addCreate(type, title, download);
      if (!validate) {
        throw new HttpException(422, "数据格式有问题", error);
      }
      let link = await downLoads.findOne({ where: { type, title } });
      if (link) {
        throw new HttpException(422, "链接已经存在", error);
      }
      console.log("123");
      link = await downLoads.create({
        type,
        title,
        download,
        description,
        submenuid,
        subnavigationid,
        menuid,
        navigationid,
      });
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
    // 校验数据
    let { error, validate } = validatedelete(id);
    if (!validate) {
      throw new HttpException(422, "数据格式有问题", error);
    }
    //查询要删除的字段是否存在
    let down = await downLoads.findByPk(id);
    if (!down) {
      throw new HttpException(422, "不存在", "nonexistence");
    }
    down = await downLoads.destroy({
      //   truncate: true,  截断
      where: {
        id,
      },
    });
    if (down[0] < 1) {
      return res.status(200).json({
        code: 0,
        message: "数据库删除日志失败",
        data: logs,
      });
    }
    return res.status(200).json({
      code: 0,
      message: "删除日志成功",
      data: logs,
    });
  } catch (error) {
    next(error);
  }
};
// 查询
module.exports.getall = async (req, res, next) => {
  try {
    let { limit = 5, offset = 0 } = req.body;
    let downs = await downLoads.findAndCountAll({
      include: { model: subMenu, attributes: ["type"] },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    // 数据转换
    let downsArrory = [];
    for (const t of downs.rows) {
      let datanew = {
        id: t.dataValues.id,
        type: t.dataValues.type,
        title: t.dataValues.title,
        download: t.dataValues.download,
        submenuid: t.dataValues.submenuid,
        submenutype: t.dataValues.submenu
          ? t.dataValues.submenu.type
          : t.dataValues.submenu,
      };
      downsArrory.push(datanew);
    }
    return res.status(200).json({
      code: 0,
      message: "获取成功",
      data: {
        downloads: downsArrory,
        count: downsArrory.count,
      },
    });
  } catch (error) {
    next(error);
  }
};
