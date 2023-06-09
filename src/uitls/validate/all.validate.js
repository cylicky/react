const validator = require("validator");
// 删除
module.exports.validatedel = (id) => {
  // 去除ID 前后所有空格
  let error = {};
  if (validator.isEmpty(id) || id == "") {
    error.create = "内容不能为空";
  }
  if (!validator.isNumeric(id)) {
    error.create = "数字不能包含其他字符";
  }
  return { error, validate: Object.keys(error).length < 1 };
};
// 修改
module.exports.validateUpdate = (id, type) => {
  id = id.replace(/\s+/g, "");
  let error = {};
  if (validator.isEmpty(id) || id == "") {
    error.create = "id不能为空";
  }
  if (!validator.isNumeric(id)) {
    error.create = "数字不能包含其他字符";
  }
  if (validator.isEmpty(type)) {
    error.create = "内容不能为空";
  }
  return { error, validate: Object.keys(error).length < 1 };
};
// 添加
module.exports.validateAdd = (type, id) => {
  id = id.replace(/\s+/g, "");
  let error = {};
  if (validator.isEmpty(type)) {
    error.create = "内容不能为空";
  }
  if (!validator.isNumeric(id)) {
    error.create = "数字不能包含其他字符";
  }
  return { error, validate: Object.keys(error).length < 1 };
};
