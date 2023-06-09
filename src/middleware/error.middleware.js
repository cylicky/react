const errorMatchMiddleware = (error, req, res, next) => {
  // error 是HttpException
  const status = error.status || 500;
  const message = error.message || "服务器错误";
  const errors = error.errors || "server is wrong";
  res.status(status).json({
    code: 0,
    message: message,
    error: errors,
  });
};

module.exports = errorMatchMiddleware;
