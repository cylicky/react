const validator = require("validator");

module.exports.validatecreate = (type) => {
  let error = {};
  if (validator.isEmpty(type)) {
    error.create = "内容不能为空";
  }
  if (!validator.isLength(type, { min: 0, max: 12 })) {
    error.create = "内容不能超过12个字符";
  }
  return { error, validate: Object.keys(error).length < 1 };
};

module.exports.validateupdate = (id, type) => {
  let error = {};
  if (validator.isEmpty(id)) {
    error.create = "id内容不能为空";
  }
  if (!validator.isNumeric(id)) {
    error.create = "其他字符";
  }
  if (validator.isEmpty(type)) {
    error.create = "内容不能为空2";
  }
  if (!validator.isLength(type, { min: 0, max: 12 })) {
    error.create = "内容不能超过12个字符";
  }
  return { error, validate: Object.keys(error).length < 1 };
};
module.exports.validatedelete = (id) => {
  console.log(id, "id");
  let error = {};
  if (validator.isEmpty(id) || id == "") {
    error.create = "内容不能为空";
  }
  if (!validator.isNumeric(id)) {
    error.create = "数字不能包含其他字符";
  }
  return { error, validate: Object.keys(error).length < 1 };
};
