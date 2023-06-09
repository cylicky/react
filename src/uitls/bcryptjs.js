const bcrypt = require("bcrypt");
const SALT = 15;

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptend) => {
      err != null ? reject(err) : resolve(encryptend);
    });
  });
};
const matchPassword = (oldhashpassword, password) => {
  return new Promise(async (resolve, reject) => {
    const match = await bcrypt.compare(password, oldhashpassword);
    resolve(match);
  });
};

module.exports = { matchPassword, hashPassword };

// async function test() {
//   const pwd = "lucky";
//   const hashpwd = await hashPassword(pwd);
//   console.log("加密的密码：" + hashpwd);
//   const oldpwd = await matchPassword(hashpwd, "lucky");
//   console.log("密码比较：" + oldpwd);
// }
// test();
