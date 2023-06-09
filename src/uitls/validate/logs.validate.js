const validator = require("validator");

module.exports.logscreate = (type) => {
  let error = {};
  if (validator.isEmpty(type)) {
    error.create = "内容不能为空";
  }
  return { error, validate: Object.keys(error).length < 1 };
};
