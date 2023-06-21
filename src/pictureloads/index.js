const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path"); // node built-in path package
const Pic = require("../models/pic");
// needs "app.use(bodyParser())" middleware to work

const storage = multer.diskStorage({
  // 保存路径
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  // 上传文件保存
  filename: function (req, file, cb) {
    // 截取文件后缀
    let file_ext = file.originalname.substring(
      file.originalname.lastIndexOf(".") + 1
    );
    cb(null, file.fieldname + "-" + Date.now() + "." + file_ext);
  },
});

//single("photo") 指定用户那边传文件的名字需要一致
const upload = multer({
  storage,
  //dest: "uploads/temp",
  limits: { fileSize: 1 * 1024 * 1024 }, // 1 Mb
  fileFilter: (req, file, callback) => {
    // 限制文件类型
    const acceptableExtensions = ["png", "jpg", "jpeg", "jpg"];
    if (
      !acceptableExtensions.some((extension) => {
        return (
          path.extname(file.originalname).toLowerCase() === `.${extension}`
        );
      })
    ) {
      //   return callback(
      //     new Error(
      //       `Extension not allowed, accepted extensions are ${acceptableExtensions.join(
      //         ","
      //       )}`
      //     )
      //   );
      return callback({
        code: 0,
        message: `Extension not allowed, accepted extensions are ${acceptableExtensions.join(
          ","
        )}`,
      });
    }
    callback(null, true);
  },
}).single("photo");

router.post("/ceshi", (req, res) => {
  //deleteDir("../../public/images/photo-1687340297282.png");
  fs.unlink("1.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("删除文件成功");
    }
  });
});

function deleteDir(url) {
  var files = [];

  if (fs.existsSync(url)) {
    //判断给定的路径是否存在

    files = fs.readdirSync(url); //返回文件和子目录的数组
    files.forEach(function (file, index) {
      var curPath = path.join(url, file);
      console.log("file", file);
      if (fs.statSync(curPath).isDirectory()) {
        //同步读取文件夹文件，如果是文件夹，则函数回调
        deleteDir(curPath);
      } else {
        fs.unlinkSync(curPath); //是指定文件，则删除
      }
    });

    fs.rmdirSync(url); //清除文件夹
  } else {
    console.log("给定的路径不存在！");
  }
}
router.post("/single", (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      // 发生错误
      res.status(200).json({
        code: 0,
        message: err,
      });
    } else if (err) {
      console.log(err);
      // 发生错误
      res.status(200).json({
        code: 0,
        message: err,
      });
    }
    // 一切都好
    // res.status(200).json(req.file);
    let pic = await Pic.create({ picurl: req.file.path });
    let a = "public/images/photo-1687340131878.png";
    a = a.replace("public", "status");
    console.log(a, "a");
    return res.status(200).json({
      code: 0,
      message: pic,
    });
  });
});

module.exports = router;
