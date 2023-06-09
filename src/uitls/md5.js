const md5 = require("md5");
const SALT = "lucky";

module.exports.md5Password = (password) => {
  // console.log("加密方法里面：", password);
  return new Promise((resolve, reject) => {
    // console.log(md5(password + SALT));
    return resolve(md5(password + SALT));
  });
};
module.exports.matchPassword = (oldpassword, password) => {
  return new Promise((resolve, reject) => {
    const newMd5Pwd = md5(password + SALT);

    // if (oldpassword === newMd5Pwd) {
    //   return resolve(true);
    // } else {
    //   return resolve(false);
    // }
    return oldpassword === newMd5Pwd ? resolve(true) : resolve(false);
    // let match = oldpassword === newMd5Pwd ? true : false;
    // return resolve(match);
  });
};

// async function test() {
//   const pwd = "lucky";
//   const md5pwd = await md5Password(pwd);
//   const oldpwd = await matchPassword(md5pwd, "luck");
//   console.log(md5pwd + "密码比较：" + oldpwd);
// }
//test();
