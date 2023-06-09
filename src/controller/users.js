const User = require("../models/user");

// 创建用户
module.exports.createUser = async (req, res, next) => {
  try {
    //获取客户端请求的内容
    let { username, password, email } = req.body;
    //数据验证
    let { error, validate } = validateCreateUser(username, password, email);
    if (!validate) {
      throw new HttpException(422, "数据格式有问题", error);
    }
    //业务验证,两步，1是验证email是否存在，2是密码加密 3是存储到数据库

    //创建成功后就返回.创建token和返回数据
    let user = await User.findByPk(email);
    if (user) {
      throw new HttpException(422, "用户邮箱已经注册", "email has regitered");
    }
    //密码加密，存储到数据库
    password = await md5Password(password);
    user = await User.create({ username, password, email });
    delete user.dataValues.password;
    return res.status(200).json({
      code: 0,
      message: "注册成功",
      data: user.dataValues,
    });
  } catch (error) {
    next(error);
  }
};

// 用户登陆
module.exports.Login = async (req, res, next) => {
  try {
    //获取请求数据
    let { email, password } = req.body;
    //验证 邮箱和密码
    let { error, validate } = validateUserLogin(email, password);
    if (!validate) {
      throw new HttpException(401, "数据格式有问题", error);
    }
    // 验证业务逻辑数据  邮箱是唯一的
    const user = await User.findByPk(email);
    console.log("数据库里面的密码", user.dataValues.password);
    if (!user) {
      throw new HttpException(401, "用户已经存在", "user not found");
    }
    // 密码是否匹配
    const olMd5Pwd = user.dataValues.password;
    const match = await matchPassword(olMd5Pwd, password);
    //console.log("比对返回的值", match, "旧密码", olMd5Pwd);
    if (!match) {
      throw new HttpException(401, "输入密码错误", "password not match");
    }
    // 生成token
    user.dataValues.token = await signtoken({
      password,
      email,
    });
    // 删除密码
    delete user.dataValues.password;

    // 返回数据
    return res.status(200).json({
      code: 0,
      data: user.dataValues,
      message: "用户登陆成功",
    });
  } catch (error) {
    next(error);
  }
};
// 获取用户
module.exports.getUser = async (req, res, next) => {
  try {
    // 验证接口权限
    // 获取请求数据
    const { email, password } = req.usertoken;
    // 验证请求数据  不需要
    const user = await User.findByPk(email);

    // const user = await User.findAll({
    //   attributes: ["email", "username"],
    //   where: {
    //     email,
    //   },
    // });
    // console.log("user:" + JSON.stringify(user));
    // console.log("取值：", user[0].username);
    if (!user) {
      throw new HttpException(401, "用户不存在", "user not found");
    }
    const match = await matchPassword(user.dataValues.password, password);
    //console.log("比对返回的值", match, "旧密码", olMd5Pwd);
    if (!match) {
      throw new HttpException(401, "token错误", "password not match");
    }
    // 添加token
    // 返回数据
    //去除掉password
    delete user.dataValues.password;
    delete user.dataValues.createdAt;
    delete user.dataValues.updatedAt;
    user.dataValues.token = req.tokenContent;
    return res.status(200).json({
      code: 0,
      message: "请求用户数据成功",
      data: user.dataValues,
    });
  } catch (error) {
    next(error);
  }
};

// 更新用户
module.exports.updateUser = async (req, res, next) => {
  try {
    //获取请求数据 req.email
    let { email, password } = req.usertoken;
    //  获取请求数据  email 验证用户是否存在
    // 验证请求数据  不需要
    const user = await User.findByPk(email);
    // console.log("查询数据", user);

    if (!user) {
      throw new HttpException(401, "用户不存在", "user not found");
    }
    // 密码是否匹配
    const olMd5Pwd = user.dataValues.password;
    // 旧密码  新密码
    const match = await matchPassword(olMd5Pwd, password);
    // console.log("比对返回的值", match, "旧密码", olMd5Pwd);
    if (!match) {
      throw new HttpException(401, "token 有问题", "token is error");
    }
    // 修改用户数据  获取请求数据 body数据

    // 数据字段判断  字段不确定
    // let { error, validate } = validateUserLogin(password);
    // if (!validate) {
    //   throw new HttpException(401, "密码或者是用户不存在", error);
    // }
    if (!req.body) {
      throw new HttpException(401, "更新数据不能为空", "updata body is null");
    }
    const bodyuser = req.body;
    const oldUpdateuser = user.dataValues;
    let username = bodyuser.username
      ? bodyuser.username
      : oldUpdateuser.username;
    let bio = bodyuser.bio ? bodyuser.bio : oldUpdateuser.bio;
    let avatar = bodyuser.avatar ? bodyuser.avatar : oldUpdateuser.avatar;
    password = oldUpdateuser.password;
    // console.log("输入数据", username, password, bio, avatar);
    // console.log(bodyuser.password, "修改的密码");
    // passwoed更新  加密
    if (bodyuser.password) {
      password = await md5Password(bodyuser.password);
    }
    // console.log("加密后的密码：", password);
    const updateuser = await user.update({
      username,
      password,
      bio,
      avatar,
    });

    // console.log("updateuser", updateuser);
    //返回数据 去除password
    delete updateuser.dataValues.password;

    //添加token 邮箱和密码生成token 返回回去
    updateuser.dataValues.token = await signtoken({
      password: bodyuser.password,
      email,
    });
    //console.log("updateuser.datavalues:", updateuser);
    //返回用户数据
    return res.status(200).json({
      code: 0,
      message: "修改数据成功",
      data: updateuser.dataValues,
    });
  } catch (error) {
    next(error);
  }
};
