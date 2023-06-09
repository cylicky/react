const HttpException = require("../anomaly/http.anomaly");
const noMatchMiddleware = (req, res, next) => {
  // res.status(404).json({
  //   code: 0,
  //   message: "router url not found",
  // });
  const noMatchError = new HttpException(
    404,
    "访问路径不匹配",
    "router url not found"
  );
  // 下一步
  next(noMatchError);
};

module.exports = noMatchMiddleware;
