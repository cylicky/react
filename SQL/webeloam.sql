-- 导航栏
INSERT INTO `navigation` VALUES ("1",'home','2023-05-07 09:41:18','2023-05-07 09:41:18');
INSERT INTO `navigation` VALUES ("2",'Windows SDK','2023-05-07 09:41:18','2023-05-07 09:41:18');
INSERT INTO `navigation` VALUES ("3",'Linux SDK','2023-05-07 09:41:18','2023-05-07 09:41:18');
INSERT INTO `navigation` VALUES ("4",'Android SDK','2023-05-07 09:41:18','2023-05-07 09:41:18');

--子导航栏
INSERT INTO `subnavigation` VALUES ("1",'WebCamera','2023-05-07 09:41:18','2023-05-07 09:41:18','2','Windows SDK');
INSERT INTO `subnavigation` VALUES ("2",'EloamView','2023-05-07 09:41:18','2023-05-07 09:41:18','2','Windows SDK');
INSERT INTO `subnavigation` VALUES ("3",'EloamDll','2023-05-07 09:41:18','2023-05-07 09:41:18','2','Windows SDK');
INSERT INTO `subnavigation` VALUES ("4",'WebCamera1','2023-05-07 09:41:18','2023-05-07 09:41:18','3','Linux SDK');
INSERT INTO `subnavigation` VALUES ("5",'EloamView2','2023-05-07 09:41:18','2023-05-07 09:41:18','3','Linux SDK');
INSERT INTO `subnavigation` VALUES ("6",'EloamDll3','2023-05-07 09:41:18','2023-05-07 09:41:18','3','Linux SDK');



-- 菜单
INSERT INTO `menu` VALUES ("1",'基础说明','WebCamera','2023-05-07 09:41:18','2023-05-07 09:41:18','1');
INSERT INTO `menu` VALUES ("2",'高拍仪','WebCamera','2023-05-07 09:41:18','2023-05-07 09:41:18','1');
INSERT INTO `menu` VALUES ("3",'卡证读取','WebCamera','2023-05-07 09:41:18','2023-05-07 09:41:18','1');
INSERT INTO `menu` VALUES ("4",'基础说明','EloamView','2023-05-07 09:41:18','2023-05-07 09:41:18','2');
INSERT INTO `menu` VALUES ("5",'高拍仪','EloamView','1023-05-07 09:41:18','2023-05-07 09:41:18','2');
INSERT INTO `menu` VALUES ("6",'卡证读取','EloamView','2023-05-07 09:41:18','2023-05-07 09:41:18','2');
-- 子菜单
INSERT INTO `submenu` VALUES ("1",'简介','2023-05-07 09:41:18','2023-05-07 09:41:18','1','基础说明');
INSERT INTO `submenu` VALUES ("2",'部署','1023-05-07 09:41:18','2023-05-07 09:41:18','1','基础说明');
INSERT INTO `submenu` VALUES ("3",'FAQ','2023-05-07 09:41:18','2023-05-07 09:41:18','1','基础说明');
INSERT INTO `submenu` VALUES ("4",'版本日志','2023-05-07 09:41:18','2023-05-07 09:41:18','1','基础说明');
INSERT INTO `submenu` VALUES ("5",'下载','2023-05-07 09:41:18','2023-05-07 09:41:18','1','基础说明');

INSERT INTO `submenu` VALUES ("6",'简介','2023-05-07 09:41:18','2023-05-07 09:41:18','4','基础说明');
INSERT INTO `submenu` VALUES ("7",'部署','1023-05-07 09:41:18','2023-05-07 09:41:18','4','基础说明');
INSERT INTO `submenu` VALUES ("8",'FAQ','2023-05-07 09:41:18','2023-05-07 09:41:18','4','基础说明');
INSERT INTO `submenu` VALUES ("9",'版本日志','2023-05-07 09:41:18','2023-05-07 09:41:18','4','基础说明');
INSERT INTO `submenu` VALUES ("10",'下载','2023-05-07 09:41:18','2023-05-07 09:41:18','4','基础说明');
-- 日志表
INSERT INTO `logs` VALUES ("1",'red','1.集成高拍仪基础功能\r\n2.集成指纹功能\r\n3.集成身份证功能\r\n4.集成ocr功能','2023-05-07 09:41:18','2023-05-07 09:41:18','4');
INSERT INTO `logs` VALUES ("2",'red','4.集成高拍仪基础功能\r\n5.集成指纹功能\r\n6.集成身份证功能\r\n4.集成ocr功能','2023-05-07 09:41:18','2023-05-07 09:41:18','4');
INSERT INTO `logs` VALUES ("3",'red','1.集成高拍仪基础功能\r\n2.集成指纹功能\r\n3.集成身份证功能\r\n4.集成ocr功能','2023-05-07 09:41:18','2023-05-07 09:41:18','9');
INSERT INTO `logs` VALUES ("4",'red','4.集成高拍仪基础功能\r\n5.集成指纹功能\r\n6.集成身份证功能\r\n4.集成ocr功能','2023-05-07 09:41:18','2023-05-07 09:41:18','9');

-- 下载表单
INSERT INTO `download` VALUES ("1",'SDK','WebCamera_EL_D_V1.2.5','https://meta.box.lenovo.com/v/link/view/f34c1277b0d246999ab1f65734809e64','2023-05-07 09:41:18','2023-05-07 09:41:18','5');
INSERT INTO `download` VALUES ("2",'DEMO','JavaScript_WebCamera','https://meta.box.lenovo.com/v/link/view/f34c1277b0d246999ab1f65734809e64','2023-05-07 09:41:18','2023-05-07 09:41:18','5');
INSERT INTO `download` VALUES ("3",'SDK','WebCamera_EL_D_V1.2.5_faceDetect','https://meta.box.lenovo.com/v/link/view/f34c1277b0d246999ab1f65734809e64','2023-05-07 09:41:18','2023-05-07 09:41:18','5');

INSERT INTO `download` VALUES ("4",'SDK','WebCamera_EL_D_V1.2.5','https://meta.box.lenovo.com/v/link/view/f34c1277b0d246999ab1f65734809e64','2023-05-07 09:41:18','2023-05-07 09:41:18','10');
INSERT INTO `download` VALUES ("5",'DEMO','JavaScript_WebCamera','https://meta.box.lenovo.com/v/link/view/f34c1277b0d246999ab1f65734809e64','2023-05-07 09:41:18','2023-05-07 09:41:18','10');
INSERT INTO `download` VALUES ("6",'SDK','WebCamera_EL_D_V1.2.5_faceDetect','https://meta.box.lenovo.com/v/link/view/f34c1277b0d246999ab1f65734809e64','2023-05-07 09:41:18','2023-05-07 09:41:18','10');
























