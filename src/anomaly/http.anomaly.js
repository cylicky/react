// const HttpException = (res, status, message, errors) => {
//   return res.status(status).json({
//     code: 0,
//     message,
//     errors,
//   });
// };

// module.exports = HttpException;

class HttpException extends Error {
  constructor(status, message, errors) {
    super();
    this.status = status;
    this.message = message;
    this.errors = errors;
  }
}
module.exports = HttpException;
