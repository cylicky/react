const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../../.env" });
// 加签token
const { JWT_SECRET } = process.env;

const signtoken = async ({ ...data }) => {
  console.log("需要添加token数据:", data);
  return new Promise((resolve, reject) => {
    jwt.sign(data, JWT_SECRET, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  });
};
// 解析token
const verifytoken = async (token) => {
  // console.log("需要解析的token:", token, "密钥：" + process.env.JWT_SECRET);
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("err", err);
        return reject(err);
      }
      //   console.log("解析数据：", decoded);
      return resolve(decoded);
    });
  });
};

module.exports = {
  signtoken,
  verifytoken,
};

// async function test() {
//   const data = {
//     name: "xiaomi",
//     age: "24",
//   };

//   const token = await signtoken(data);
//   console.log("加签", token);
//   // let token =
//   //   "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.ks3lXibpH-zHVo5TrNBd6sgmbCB32tBbn8hMGcQ-Acg";
//   const analysis = await verifytoken(token);
//   console.log("解签", analysis); //iat 这个属性 发布时间
// }

//test();
