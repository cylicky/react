const Faqs = require("../models/faq");
const subMenu = require("../models/submenu");
const { validatedel } = require("../uitls/validate/all.validate");
const HttpException = require("../anomaly/http.anomaly");
// 添加 修改
module.exports.saveOrUpdate = async (req, res, next) => {
  try {
    let { id, title, problem, answer, desc, submenuid } = req.body;
    if (id) {
      let faq = await Faqs.findOne({ where: { id } });
      if (!faq) {
        throw new HttpException(422, "不存在", " not exist");
      }
      title = title ? title : faq.dataValues.title;
      problem = problem ? problem : faq.dataValues.problem;
      answer = answer ? answer : faq.dataValues.answer;
      desc = desc ? desc : faq.dataValues.desc;
      submenuid = submenuid ? submenuid : faq.dataValues.submenuid;
      // 修改传入进来的值
      faq = await Faqs.update(
        { title, problem, answer, desc, submenuid },
        { where: { id } }
      );

      return faq[0] > 0
        ? res.status(200).json({
            code: 0,
            message: "更新成功",
          })
        : res.status(200).json({
            code: 0,
            message: "更新失败",
          });
    } else {
      let faq = await Faqs.create({ title, problem, answer, desc, submenuid });
      return faq
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
    let faq = await Faqs.findByPk(id);
    if (!faq) {
      throw new HttpException(422, "不存在", "nonexistence");
    }
    faq = await Faqs.destroy({
      //   truncate: true,  截断
      where: {
        id,
      },
    });
    return faq > 0
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
    let faq = await Faqs.findAndCountAll({
      include: { model: subMenu, attributes: ["type"] },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    let faqArrory = [];
    for (const t of faq.rows) {
      let datanew = {
        id: t.dataValues.id,
        title: t.dataValues.title,
        problem: t.dataValues.problem,
        answer: t.dataValues.answer,
        desc: t.dataValues.desc,
        submenuid: t.dataValues.submenuid,
        submenutype: t.dataValues.submenu
          ? t.dataValues.submenu.type
          : t.dataValues.submenu,
      };
      faqArrory.push(datanew);
    }

    return res.status(200).json({
      code: 0,
      message: "获取成功",
      data: {
        faq: faqArrory,
        count: faq.count,
      },
    });
  } catch (error) {
    next(error);
  }
};
