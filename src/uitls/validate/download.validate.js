const validator = require("validator");

module.exports.addCreate = (type, name, download) => {
  let error = {};
  if (validator.isEmpty(type)) {
    error.create = "分类不能为空";
  }
  if (validator.isEmpty(name)) {
    error.create = "标题不能为空";
  }
  if (validator.isEmpty(download) || validator.isUppercase(download)) {
    error.create = "下载链接不能为空,必须是一个URL地址";
  }
  return { error, validate: Object.keys(error).length < 1 };
};
