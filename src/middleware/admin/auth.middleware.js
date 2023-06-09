const HttpException = require("../../anomaly/http.anomaly");
const { verifytoken } = require("../../uitls/jwt");
module.exports.authMiddleware = async (req, res, next) => {
  //两种方式都可以拿到
  //   console.log(req.headers.authorization);
  //   console.log(req.header("Authorization"));
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(
      new HttpException(401, "authorization 必须提供", "authorization missing")
    );
  }
  // 验证token 头文件和内容
  const tokenType = authHeader.split(" ")[0];
  const tokenContent = authHeader.split(" ")[1];
  if (tokenType !== "token" || !tokenContent) {
    return next(
      new HttpException(401, "token 格式错误 token content", "Token  missing")
    );
  }
  //解签验证
  try {
    // 把拿到的token 传输进去解密
    const usertoken = await verifytoken(tokenContent);
    if (!usertoken) {
      return next(
        new HttpException(401, "token 内容不存在", "tokens decode error")
      );
    }
    // 把token解析出来的对象挂载在user 这个字段上
    // console.log("解析jwt:", usertoken);

    req.usertoken = usertoken;
    req.tokenContent = tokenContent;
    return next();
  } catch (error) {
    // jwt 验证失败 token 失败 过期等
    return next(
      new HttpException(401, "token token验证失败123", error.message)
    );
  }
};
