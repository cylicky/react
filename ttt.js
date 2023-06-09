
{

  "androiddownloadmessage": {
    "results": [
      {
        "id": 3,
        "desc": "<p>安卓系统上可以通过UVC的方式或者系统camera的方式来调用高拍仪打开视频图像，拍照等操作。在安卓系统上，我们还集成了读取身份证、ocr、纠偏裁边、人证比对、指纹、四合一、签名、评价等功能，以下是对应功能的代码及演示app：</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>打开高拍仪：openCamera</p>\r\n\r\n<p>读身份证：IDCardReader</p>\r\n\r\n<p>ocr：OCR</p>\r\n\r\n<p>纠偏裁边：RectifyingAndCutEdge</p>\r\n\r\n<p>指纹仪：zaz_V8a_(20200105)_androidstudio</p>\r\n\r\n<p>IC加密算法，人证比对demo：WithnessCheck</p>\r\n\r\n<p>签批屏和评价器：DrawingBoardView-master</p>\r\n\r\n<p>四合一：fourInOne</p>\r\n\r\n<p>密码键盘：NumberKeyboard-master</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>*：如果您需要使用人证比对功能，请使用带有IC的高拍仪，如果高拍仪不带IC，请联系销售更换成带IC的高拍仪</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "create_at": "2021-08-15T12:21:05.449295+08:00",
        "update_at": "2021-08-16T17:31:41.808809+08:00"
      }
    ]
  },
  "linuxdownloadmessage": {
    "results": [
      {
        "id": 2,
        "desc": "<p>我们常见的系统是Windows系统，Windows系统又分为：xp、win7、win10等不同的版本。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>国产系统也不例外，国产系统有很多种，deepin、中标麒麟、银河麒麟、统信uos等。</p>\r\n\r\n<p>国产系统除了区分系统外，还区分CPU架构，常见的cpu架构有：兆芯、海光、inter、AMD、飞腾、鲲鹏、龙芯等。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>不同的系统和CPU都有它们各自的特性，这样就造成了，同一个软件可以在银河麒麟+飞腾CPU上使用，但是切换到统信uos+interCPU上就无法使用。所以我们在对接SDK的时候，需要注意自己使用的是什么系统，什么架构的CPU，然后下载对应的SDK，在做集成。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>系统和CPU是非常多的，我们适配的也是非常多的，为了大家可以更好的了解国产系统、CPU架构，我们对CPU型号所属架构做了以下分类，这样大家在集成SDK的时候，只需要下载对应的SDK就可以了。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img src=\"/media/upload/2021/08/14/image.png\" style=\"height:161px; width:714px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>我们提供的SDK是web控件，需要打开浏览器，通过浏览器来访问各个接口。</p>\r\n\r\n<p>每个SDK包中会存放三个文件：1.ded安装包。2.安装教程。3.接口文档</p>\r\n\r\n<p>您可以通过安装教程来进行软件的安装，可以查看接口文档，了解各个功能对应的接口是什么。</p>\r\n\r\n<p><span style=\"color:#e74c3c\">*：温馨提示：在安装软件的过程中，如提示输入密码，请输入您自定义的用户密码，这个密码是您自己设置的，并不是我们设置的。</span></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "create_at": "2021-08-14T16:57:27.267465+08:00",
        "update_at": "2021-08-16T15:55:06.863145+08:00"
      }
    ]
  },
  "windowssdkdownloadmessage": {
    "results": [
      {
        "id": 1,
        "desc": "<h3><strong>为什么SDK下载下来是exe？</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>SDK包涉及到控件的注册、模块驱动的安装等操作，为了简化对接的复杂度，方便您快速的对接集成，我们是将SDK打包成exe了，这样做到了一键操作部署环境，所以您下载下来后是一个exe执行程序。双击exe进行安装，安装后的文件夹就是SDK对接集成需要的文件。</p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h3><strong>为什么每种SDK开发包都有多个下载地址？它们有什么区别？我应该下载哪一个SDK开发包？</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>由于人脸库、ocr库文件比较大，有的项目中是不需要使用到这些库的，所以我们将同一种SDK开发包会打包成多个包，您需要使用哪些功能下载对应的SDK开发包就可以了。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol>\r\n\t<li>SDK开发包我们会打包成四种：</li>\r\n\t<li>1.开发包名称_版本号</li>\r\n\t<li>2.开发包名称_版本号_faceDetect</li>\r\n\t<li>3.开发包名称_版本号_ocr</li>\r\n\t<li>4.开发包名称_版本号_faceDetect_ocr</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol>\r\n\t<li>四种SDK开发包的区别：</li>\r\n\t<li>1.高拍仪基础包，包含除去人脸功能+ocr功能的所有功能。</li>\r\n\t<li>2.高拍仪基础包的基础上添加人脸功能。</li>\r\n\t<li>3.高拍仪基础包的基础上添加ocr功能</li>\r\n\t<li>4.高拍仪基础包的基础上添加人脸功能+ocr功能</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>您只需要根据您的项目需求，下载对应的SDK包即可。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><span style=\"color:#e74c3c\">*：如果您需要使用身份证功能，除了下载对应的SDK包，还需要硬件高拍仪配备身份证模块，才可以使用此功能</span></p>\r\n\r\n<p><span style=\"color:#e74c3c\">*：如果您需要使用指纹功能，除了下载对应的SDK包，还需要硬件高拍仪配备模块模块，才可以使用此功能</span></p>\r\n\r\n<p><span style=\"color:#e74c3c\">*：如果您需要使用人脸功能，除了下载对应的SDK包，还需要硬件高拍仪配备人脸芯片，才可以使用此功能</span></p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h3><strong>如果现有的SDK开发包不满足我的功能，我应该怎么做？</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>如果现有SDK的功能不能满足您的项目需求，您可以联系销售人员（高拍仪卖家）提出您的需求，由销售人员填写立项单交给研发部定制开发。</p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h3><strong>如果demo出现bug，我可以提Issues吗？</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>可以的，如果您测试出demo中的bug，亦或者您对demo有什么好的建议，都是可以前往对应的demo仓库中提Issues的。Issues标题要求：SDK名称 - 开发语言 - 功能接口 - 问题。</p>",
        "create_at": "2021-08-11T16:00:03.967231+08:00",
        "update_at": "2021-08-11T16:00:03.967231+08:00"
      }
    ]
  },
  "windowssdkexplain": [
    {
      "sdkname": 1,
      "results": [
        {
          "id": 4,
          "sdkname": "EloamView",
          "title": "简介",
          "desc": "<p><strong>SDK简介</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;EloamView采用C++开发，将所有高拍仪功能封装成ocx控件，通过加载ocx，调用对应的接口，获取到对应的数据。</p>\r\n\r\n<p><br />\r\n<strong>支持哪些语言？调用方式是什么？</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;此SDK采用调用ocx控件接口的方式获取数据，所以主流语言都是支持的。包含但不限于：C++、C#、Java、Python、JavaScript、vue等。</p>\r\n\r\n<p><br />\r\n<strong>适用场景</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;无论您的项目是C/S架构，亦或者是B/S架构，都是支持的。由于现代浏览器都不支持ocx控件，所以浏览器只支持IE。</p>\r\n\r\n<p><br />\r\n<strong>SDK功能</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;功能包含常规高拍仪功能（预览图像、拍照、旋转、纠偏、读取身份证等），人脸功能（活体检测、人证比对等），OCR功能等。</p>",
          "index": 0,
          "create_at": "2021-08-14T23:06:23.096264+08:00",
          "update_at": "2021-08-14T23:06:23.096264+08:00"
        }
      ]
    },
    {
      "sdkname": 2,
      "results": [
        {
          "id": 3,
          "sdkname": "EloamDll",
          "title": "简介",
          "desc": "<p><strong>SDK简介</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;EloamDll采用C++开发，将所有高拍仪功能封装成dll动态库，通过调用dll动态库接口，获取到对应的数据。</p>\r\n\r\n<p><br />\r\n<strong>支持哪些语言？调用方式是什么？</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;此SDK采用调用dll动态库的方式获取数据，所以主流语言都是支持的。包含但不限于：C++、C#、Java、Python等。</p>\r\n\r\n<p><br />\r\n<strong>适用场景</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;此SDK适用于C/S架构软件开发</p>\r\n\r\n<p><br />\r\n<strong>SDK功能</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;功能包含常规高拍仪功能（预览图像、拍照、旋转、纠偏、读取身份证等），人脸功能（活体检测、人证比对等），OCR功能等。</p>",
          "index": 0,
          "create_at": "2021-08-14T23:05:58.841209+08:00",
          "update_at": "2021-08-14T23:07:13.721974+08:00"
        }
      ]
    },
    {
      "sdkname": 3,
      "results": [
        {
          "id": 1,
          "sdkname": "WebCamera",
          "title": "简介",
          "desc": "<h2>简介</h2>\r\n\r\n<p>webCamera采用C++开发，将所有高拍仪功能封装成一个本地服务器。 通过发送http请求，获取对应的数据。</p>\r\n\r\n<p><br />\r\n由于IE浏览器对http请求不够友好，但是部分项目仍然在使用IE8等老旧的浏览器， 为了兼容IE与谷歌等现代浏览器，webCamera封装了两种对接方式：1.ocx；2.http。 用户可以根据自己的项目，选择集成方式。</p>\r\n\r\n<p><br />\r\n部分机型需要安装模块驱动，才能正常的使用。 比如带有二代证模块的设备，需要安装二代证驱动，才能正常使用身份证的读取。 为了简化对接的复杂度，我们将SDK打包成exe了，这样就可以一键操作，部署好使用环境。 这样开发者只需要调用对应的接口，就可以实现高拍仪的调用。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h4>关于postman 发送请求</h4>\r\n\r\n<p>在发送请求前，需要先调用打开视频的接口，调用这个接口后，webCamera才会与设备进行连接 从而其他的请求才能获取到正确的数据。</p>",
          "index": 0,
          "create_at": "2021-06-17T00:37:37.072736+08:00",
          "update_at": "2021-08-14T23:03:46.082326+08:00"
        },
        {
          "id": 2,
          "sdkname": "WebCamera",
          "title": "部署",
          "desc": "<h2>webCamera</h2>\r\n\r\n<p>webCamera是封装的一个本地服务器，所以所有的客户端电脑都需要安装这个控件。</p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h2>C/S架构</h2>\r\n\r\n<p>如果您的项目是C/S架构的客户端软件，那么客户端电脑除了安装webCamera，还需要安装您的软件。</p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h2>B/S架构</h2>\r\n\r\n<p>如果您的项目是B/S架构的web项目， 只需要将您的项目部署到服务器上， 客户端电脑安装webCamera控件就可以了。</p>",
          "index": 1,
          "create_at": "2021-06-17T01:05:23.240498+08:00",
          "update_at": "2021-08-11T17:13:21.476936+08:00"
        }
      ]
    }
  ],
  "windowssdklog": [
    {
      "sdkname": 1,
      "results": [
        {
          "id": 3,
          "sdkname": "EloamView",
          "version": "v1.2.6",
          "desc": "1.集成高拍仪基础功能\r\n2.集成指纹功能\r\n3.集成身份证功能\r\n4.集成ocr功能",
          "create_at": "2021-07-05T16:07:50.178953+08:00"
        }
      ]
    },
    {
      "sdkname": 2,
      "results": [
        {
          "id": 4,
          "sdkname": "EloamDll",
          "version": "v2.2.4",
          "desc": "1.集成高拍仪基础功能\r\n2.集成身份证相关接口\r\n3.集成指纹相关接口\r\n4.集成签字相关接口",
          "create_at": "2021-07-05T16:11:35.145977+08:00"
        }
      ]
    },
    {
      "sdkname": 3,
      "results": [
        {
          "id": 6,
          "sdkname": "WebCamera",
          "version": "v1.0.4",
          "desc": "拍照保存本地时：\r\n1.检查传入路径是否合法\r\n2.检查路径是否包含文件夹\r\n3.传入的路径合法并包含文件夹，在创建图片的同时，创建文件夹",
          "create_at": "2021-08-03T18:15:03.400867+08:00"
        },
        {
          "id": 5,
          "sdkname": "WebCamera",
          "version": "v1.0.4",
          "desc": "修改拍照接口，filepath传空，拍摄的本地图片持久化，不做删除",
          "create_at": "2021-07-22T15:51:37.961822+08:00"
        },
        {
          "id": 2,
          "sdkname": "WebCamera",
          "version": "v1.0.4",
          "desc": "1. 拍照接口增加五种色彩模式：彩色，灰色，黑白，白纸印章，去背景色五种\r\n2. 增加GW500A签字接口\r\n3. 增加主副摄像头开启关闭纠偏显示接口\r\n4. 增加放大缩小接口\r\n5. 增加读取社保卡功能",
          "create_at": "2021-06-14T00:09:06.554509+08:00"
        }
      ]
    }
  ],
  "windowsproduct": {
    "id": 1,
    "results": [
      {
        "id": 1,
        "name": "EloamView",
        "desc": "<h2>简介</h2>\r\n\r\n<p>采用C++开发，将所有高拍仪功能封装成ocx控件</p>",
        "create_at": "2021-06-08T01:17:51.243055+08:00"
      },
      {
        "id": 2,
        "name": "EloamDll",
        "desc": "<h2>简介</h2>\r\n\r\n<p>提供dll进行对接</p>",
        "create_at": "2021-06-08T01:20:44.675876+08:00"
      },
      {
        "id": 3,
        "name": "WebCamera",
        "desc": "<h2>简介</h2>\r\n\r\n<p>将所有高拍仪功能封装成一个本地服务器（webCamera），当本地启动服务后，可以发送http请求，获取对应的接口数据</p>",
        "create_at": "2021-06-08T01:22:13.258799+08:00"
      }
    ]
  },
  "androidapp": {
    "id": 1,
    "results": [
      {
        "id": 1,
        "android_type": "APP",
        "name": "ocr",
        "download": "https://console.box.lenovo.com/l/951WxV",
        "desc": "",
        "create_at": "2021-08-16T17:36:48.011991+08:00",
        "update_at": "2021-08-16T17:36:48.011991+08:00"
      },
      {
        "id": 2,
        "android_type": "APP",
        "name": "签名+评价",
        "download": "https://console.box.lenovo.com/l/l07FJm",
        "desc": "",
        "create_at": "2021-08-16T17:37:30.644210+08:00",
        "update_at": "2021-08-16T17:37:30.644210+08:00"
      },
      {
        "id": 3,
        "android_type": "APP",
        "name": "打开高拍仪",
        "download": "https://console.box.lenovo.com/l/951WxZ",
        "desc": "",
        "create_at": "2021-08-16T17:37:51.980458+08:00",
        "update_at": "2021-08-16T17:37:51.980458+08:00"
      },
      {
        "id": 4,
        "android_type": "APP",
        "name": "四合一",
        "download": "https://console.box.lenovo.com/l/31LtwC",
        "desc": "",
        "create_at": "2021-08-16T17:38:30.642972+08:00",
        "update_at": "2021-08-16T17:38:30.642972+08:00"
      },
      {
        "id": 5,
        "android_type": "APP",
        "name": "身份证",
        "download": "https://console.box.lenovo.com/l/Eny4LS",
        "desc": "",
        "create_at": "2021-08-16T17:39:14.827749+08:00",
        "update_at": "2021-08-16T17:39:14.827749+08:00"
      },
      {
        "id": 6,
        "android_type": "APP",
        "name": "纠偏裁边",
        "download": "https://console.box.lenovo.com/l/k1qTPE",
        "desc": "",
        "create_at": "2021-08-16T17:40:35.107862+08:00",
        "update_at": "2021-08-16T17:40:35.107862+08:00"
      },
      {
        "id": 7,
        "android_type": "APP",
        "name": "IC加密-人证比对",
        "download": "https://console.box.lenovo.com/l/2n6wo7",
        "desc": "",
        "create_at": "2021-08-16T17:42:09.092373+08:00",
        "update_at": "2021-08-16T17:42:09.092373+08:00"
      },
      {
        "id": 16,
        "android_type": "APP",
        "name": "指纹",
        "download": "https://console.box.lenovo.com/l/Kua1FG",
        "desc": "",
        "create_at": "2021-08-16T17:55:45.588212+08:00",
        "update_at": "2021-08-16T17:55:45.588212+08:00"
      }
    ]
  },
  "androidsdk": {
    "id": 1,
    "results": [
      {
        "id": 9,
        "android_type": "SDK",
        "name": "OCR",
        "download": "https://console.box.lenovo.com/l/s1LDGS",
        "desc": "",
        "create_at": "2021-08-16T17:53:13.844724+08:00",
        "update_at": "2021-08-16T17:53:13.844724+08:00"
      },
      {
        "id": 10,
        "android_type": "SDK",
        "name": "身份证",
        "download": "https://console.box.lenovo.com/l/8ufSbW",
        "desc": "",
        "create_at": "2021-08-16T17:53:30.930904+08:00",
        "update_at": "2021-08-16T17:53:30.930904+08:00"
      },
      {
        "id": 11,
        "android_type": "SDK",
        "name": "IC加密-人证比对",
        "download": "https://console.box.lenovo.com/l/2n6wot",
        "desc": "",
        "create_at": "2021-08-16T17:53:55.822097+08:00",
        "update_at": "2021-08-16T17:53:55.822097+08:00"
      },
      {
        "id": 12,
        "android_type": "SDK",
        "name": "纠偏裁边",
        "download": "https://console.box.lenovo.com/l/LHiuNC",
        "desc": "",
        "create_at": "2021-08-16T17:54:18.139416+08:00",
        "update_at": "2021-08-16T17:54:18.139416+08:00"
      },
      {
        "id": 13,
        "android_type": "SDK",
        "name": "打开高拍仪",
        "download": "https://console.box.lenovo.com/l/I00yvi",
        "desc": "",
        "create_at": "2021-08-16T17:54:36.106828+08:00",
        "update_at": "2021-08-16T17:54:36.106828+08:00"
      },
      {
        "id": 14,
        "android_type": "SDK",
        "name": "四合一",
        "download": "https://console.box.lenovo.com/l/t5dICf",
        "desc": "",
        "create_at": "2021-08-16T17:54:55.571598+08:00",
        "update_at": "2021-08-16T17:54:55.571598+08:00"
      },
      {
        "id": 15,
        "android_type": "SDK",
        "name": "签名+评价",
        "download": "https://console.box.lenovo.com/l/j568DE",
        "desc": "",
        "create_at": "2021-08-16T17:55:23.460077+08:00",
        "update_at": "2021-08-16T17:55:23.460077+08:00"
      },
      {
        "id": 17,
        "android_type": "SDK",
        "name": "密码键盘",
        "download": "https://console.box.lenovo.com/l/e1veEk",
        "desc": "",
        "create_at": "2021-08-16T17:56:11.994494+08:00",
        "update_at": "2021-08-16T17:56:11.994494+08:00"
      },
      {
        "id": 18,
        "android_type": "SDK",
        "name": "指纹",
        "download": "https://console.box.lenovo.com/l/AogZBi",
        "desc": "",
        "create_at": "2021-08-16T17:57:38.051940+08:00",
        "update_at": "2021-08-16T17:57:38.051940+08:00"
      }
    ]
  },
  "linuxsdk": {
    "linux": 1,
    "results": [
      {
        "id": 1,
        "linux_type": "AMD",
        "name": "良田_中标麒麟X86_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
        "download": "https://console.box.lenovo.com/l/LHiuNS",
        "desc": "",
        "create_at": "2021-08-16T16:43:49.741074+08:00",
        "update_at": "2021-08-16T16:43:49.741074+08:00"
      },
      {
        "id": 2,
        "linux_type": "AMD",
        "name": "良田_UOSX86_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
        "download": "https://console.box.lenovo.com/l/LHiuNq",
        "desc": "",
        "create_at": "2021-08-16T16:56:20.715700+08:00",
        "update_at": "2021-08-16T16:56:20.715700+08:00"
      },
      {
        "id": 3,
        "linux_type": "AMD",
        "name": "良田_银河麒麟X86_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
        "download": "https://console.box.lenovo.com/l/a0OTZL",
        "desc": "",
        "create_at": "2021-08-16T16:56:45.834944+08:00",
        "update_at": "2021-08-16T16:56:45.834944+08:00"
      },
      {
        "id": 4,
        "linux_type": "ARM",
        "name": "良田_UOS飞腾_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
        "download": "https://console.box.lenovo.com/l/e1veEs",
        "desc": "",
        "create_at": "2021-08-16T16:58:07.482665+08:00",
        "update_at": "2021-08-16T16:58:07.482665+08:00"
      },
      {
        "id": 5,
        "linux_type": "ARM",
        "name": "良田_银河麒麟飞腾_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
        "download": "https://console.box.lenovo.com/l/5HhCgX",
        "desc": "",
        "create_at": "2021-08-16T16:58:31.139203+08:00",
        "update_at": "2021-08-16T16:58:31.139203+08:00"
      },
      {
        "id": 6,
        "linux_type": "MIPS",
        "name": "良田_kylin龙芯_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
        "download": "https://console.box.lenovo.com/l/I00yvO",
        "desc": "",
        "create_at": "2021-08-16T16:59:47.634702+08:00",
        "update_at": "2021-08-16T16:59:47.634702+08:00"
      },
      {
        "id": 7,
        "linux_type": "MIPS",
        "name": "良田_UOS龙芯_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
        "download": "https://console.box.lenovo.com/l/wJLLh1",
        "desc": "",
        "create_at": "2021-08-16T17:00:06.595090+08:00",
        "update_at": "2021-08-16T17:00:06.595090+08:00"
      }
    ]
  },
  "windowssdkdownloadaddress": [
    {
      "sdkname": 1,
      "download_type": 0,
      "results": [
        {
          "id": 10,
          "sdkname": "EloamView",
          "download_type": "SDK",
          "title": "EloamView_Base_1.2.6",
          "address": "https://console.box.lenovo.com/l/wJLLCs",
          "create_at": "2021-07-06T19:24:06.422058+08:00"
        },
        {
          "id": 11,
          "sdkname": "EloamView",
          "download_type": "SDK",
          "title": "EloamView_Face_1.2.6",
          "address": "https://console.box.lenovo.com/l/W0TGJ6",
          "create_at": "2021-07-06T19:24:41.140924+08:00"
        },
        {
          "id": 12,
          "sdkname": "EloamView",
          "download_type": "SDK",
          "title": "EloamView_OCR_1.2.6",
          "address": "https://console.box.lenovo.com/l/j568mS",
          "create_at": "2021-07-06T19:25:01.004787+08:00"
        }
      ]
    },
    {
      "sdkname": 1,
      "download_type": 1,
      "results": []
    },
    {
      "sdkname": 3,
      "download_type": 1,
      "results": [
        {
          "id": 3,
          "sdkname": "WebCamera",
          "download_type": "Demo",
          "title": "JavaScript_WebCamera",
          "address": "https://gitee.com/vvvj/java-script-web-camera",
          "create_at": "2021-06-27T20:16:41.449113+08:00"
        },
        {
          "id": 13,
          "sdkname": "WebCamera",
          "download_type": "Demo",
          "title": "vue_webcamera",
          "address": "https://gitee.com/vvvj/vue_webcamera",
          "create_at": "2021-07-21T20:12:44.788353+08:00"
        }
      ]
    },
    {
      "sdkname": 3,
      "download_type": 0,
      "results": [
        {
          "id": 4,
          "sdkname": "WebCamera",
          "download_type": "SDK",
          "title": "WebCamera_EL_D_V1.0.14",
          "address": "https://console.box.lenovo.com/l/yJ4suI",
          "create_at": "2021-07-06T18:18:55.849145+08:00"
        },
        {
          "id": 5,
          "sdkname": "WebCamera",
          "download_type": "SDK",
          "title": "WebCamera_EL_D_V1.0.14_faceDetect",
          "address": "https://console.box.lenovo.com/l/a0OTv4",
          "create_at": "2021-07-06T19:13:27.231144+08:00"
        },
        {
          "id": 6,
          "sdkname": "WebCamera",
          "download_type": "SDK",
          "title": "WebCamera_EL_D_V1.0.14_OCR",
          "address": "https://console.box.lenovo.com/l/s1LDqZ",
          "create_at": "2021-07-06T19:13:51.165432+08:00"
        }
      ]
    }
  ],
  "windowsfunction": [
    {
      "id": 3,
      "title": "WebCamera",
      "results": [
        {
          "id": 1,
          "sdkname": "WebCamera",
          "name": "高拍仪",
          "index": 1,
          "create_at": "2021-06-08T17:55:18.160597+08:00"
        },
        {
          "id": 2,
          "sdkname": "WebCamera",
          "name": "卡证读取",
          "index": 2,
          "create_at": "2021-06-08T17:55:32.775779+08:00"
        },
        {
          "id": 4,
          "sdkname": "WebCamera",
          "name": "人脸",
          "index": 3,
          "create_at": "2021-06-08T17:55:47.697064+08:00"
        },
        {
          "id": 5,
          "sdkname": "WebCamera",
          "name": "OCR",
          "index": 4,
          "create_at": "2021-06-08T17:55:53.688208+08:00"
        },
        {
          "id": 31,
          "sdkname": "WebCamera",
          "name": "设备",
          "index": 5,
          "create_at": "2021-06-19T20:58:52.244335+08:00"
        },
        {
          "id": 32,
          "sdkname": "WebCamera",
          "name": "串口",
          "index": 6,
          "create_at": "2021-06-19T20:59:03.355202+08:00"
        },
        {
          "id": 51,
          "sdkname": "WebCamera",
          "name": "IE  |  ocx",
          "index": 7,
          "create_at": "2021-07-07T09:44:18.708315+08:00"
        }
      ]
    },
    {
      "id": 2,
      "title": "EloamDll",
      "results": [
        {
          "id": 33,
          "sdkname": "EloamDll",
          "name": "全局函数",
          "index": 0,
          "create_at": "2021-06-27T20:18:57.818909+08:00"
        },
        {
          "id": 34,
          "sdkname": "EloamDll",
          "name": "图像函数",
          "index": 1,
          "create_at": "2021-06-27T20:19:16.723022+08:00"
        },
        {
          "id": 35,
          "sdkname": "EloamDll",
          "name": "内存对象函数",
          "index": 2,
          "create_at": "2021-06-27T20:19:30.339486+08:00"
        },
        {
          "id": 36,
          "sdkname": "EloamDll",
          "name": "图像列表函数",
          "index": 3,
          "create_at": "2021-06-27T20:19:42.924101+08:00"
        },
        {
          "id": 37,
          "sdkname": "EloamDll",
          "name": "HTTP函数",
          "index": 4,
          "create_at": "2021-06-27T20:19:52.716851+08:00"
        },
        {
          "id": 38,
          "sdkname": "EloamDll",
          "name": "FTP函数",
          "index": 5,
          "create_at": "2021-06-27T20:20:03.273008+08:00"
        },
        {
          "id": 39,
          "sdkname": "EloamDll",
          "name": "设备函数",
          "index": 6,
          "create_at": "2021-06-27T20:20:13.741306+08:00"
        },
        {
          "id": 40,
          "sdkname": "EloamDll",
          "name": "视频函数",
          "index": 7,
          "create_at": "2021-06-27T20:20:20.599351+08:00"
        },
        {
          "id": 41,
          "sdkname": "EloamDll",
          "name": "窗口函数",
          "index": 8,
          "create_at": "2021-06-27T20:20:30.789804+08:00"
        },
        {
          "id": 42,
          "sdkname": "EloamDll",
          "name": "区域函数1",
          "index": 9,
          "create_at": "2021-06-27T20:20:37.490282+08:00"
        },
        {
          "id": 48,
          "sdkname": "EloamDll",
          "name": "区域函数2",
          "index": 10,
          "create_at": "2021-06-28T17:38:42.257457+08:00"
        },
        {
          "id": 49,
          "sdkname": "EloamDll",
          "name": "区域列表函数",
          "index": 11,
          "create_at": "2021-06-29T10:15:07.513697+08:00"
        },
        {
          "id": 43,
          "sdkname": "EloamDll",
          "name": "缩略图函数",
          "index": 12,
          "create_at": "2021-06-27T20:20:50.663790+08:00"
        },
        {
          "id": 44,
          "sdkname": "EloamDll",
          "name": "字体函数",
          "index": 13,
          "create_at": "2021-06-27T20:20:56.754300+08:00"
        },
        {
          "id": 45,
          "sdkname": "EloamDll",
          "name": "模板函数",
          "index": 14,
          "create_at": "2021-06-27T20:21:12.789635+08:00"
        },
        {
          "id": 46,
          "sdkname": "EloamDll",
          "name": "录像",
          "index": 15,
          "create_at": "2021-06-27T20:21:19.539289+08:00"
        },
        {
          "id": 47,
          "sdkname": "EloamDll",
          "name": "回调函数",
          "index": 16,
          "create_at": "2021-06-27T20:21:27.200809+08:00"
        }
      ]
    },
    {
      "id": 1,
      "title": "eloamview",
      "results": [
        {
          "id": 9,
          "sdkname": "EloamView",
          "name": "设备",
          "index": 0,
          "create_at": "2021-06-19T14:26:43.648566+08:00"
        },
        {
          "id": 10,
          "sdkname": "EloamView",
          "name": "图像",
          "index": 1,
          "create_at": "2021-06-19T14:27:54.060123+08:00"
        },
        {
          "id": 11,
          "sdkname": "EloamView",
          "name": "拍照",
          "index": 2,
          "create_at": "2021-06-19T15:21:25.487829+08:00"
        },
        {
          "id": 12,
          "sdkname": "EloamView",
          "name": "录像",
          "index": 3,
          "create_at": "2021-06-19T15:41:33.863586+08:00"
        },
        {
          "id": 13,
          "sdkname": "EloamView",
          "name": "PDF",
          "index": 4,
          "create_at": "2021-06-19T15:44:19.881560+08:00"
        },
        {
          "id": 14,
          "sdkname": "EloamView",
          "name": "功能操作",
          "index": 5,
          "create_at": "2021-06-19T15:45:49.342881+08:00"
        },
        {
          "id": 15,
          "sdkname": "EloamView",
          "name": "水印",
          "index": 6,
          "create_at": "2021-06-19T15:48:02.255498+08:00"
        },
        {
          "id": 16,
          "sdkname": "EloamView",
          "name": "条码，二维码识别",
          "index": 7,
          "create_at": "2021-06-19T15:58:39.966218+08:00"
        },
        {
          "id": 17,
          "sdkname": "EloamView",
          "name": "人脸识别",
          "index": 8,
          "create_at": "2021-06-19T16:00:49.902301+08:00"
        },
        {
          "id": 18,
          "sdkname": "EloamView",
          "name": "身份证",
          "index": 9,
          "create_at": "2021-06-19T16:10:19.627548+08:00"
        },
        {
          "id": 19,
          "sdkname": "EloamView",
          "name": "IC卡",
          "index": 10,
          "create_at": "2021-06-19T16:19:54.603135+08:00"
        },
        {
          "id": 20,
          "sdkname": "EloamView",
          "name": "磁条刷卡",
          "index": 11,
          "create_at": "2021-06-19T16:23:29.538733+08:00"
        },
        {
          "id": 21,
          "sdkname": "EloamView",
          "name": "OCR识别",
          "index": 12,
          "create_at": "2021-06-19T16:26:48.867162+08:00"
        },
        {
          "id": 22,
          "sdkname": "EloamView",
          "name": "模板识别（身份证和护照）",
          "index": 13,
          "create_at": "2021-06-19T16:30:32.993516+08:00"
        },
        {
          "id": 23,
          "sdkname": "EloamView",
          "name": "发票识别",
          "index": 14,
          "create_at": "2021-06-19T16:33:42.562880+08:00"
        },
        {
          "id": 24,
          "sdkname": "EloamView",
          "name": "书籍展平",
          "index": 15,
          "create_at": "2021-06-19T16:36:10.098197+08:00"
        },
        {
          "id": 25,
          "sdkname": "EloamView",
          "name": "摄像头硬件参数获取和设置",
          "index": 16,
          "create_at": "2021-06-19T16:38:33.818858+08:00"
        },
        {
          "id": 26,
          "sdkname": "EloamView",
          "name": "条码（二维码）识读器",
          "index": 17,
          "create_at": "2021-06-19T16:41:40.657060+08:00"
        },
        {
          "id": 27,
          "sdkname": "EloamView",
          "name": "加密（部分设备适用）",
          "index": 18,
          "create_at": "2021-06-19T16:45:56.665967+08:00"
        },
        {
          "id": 28,
          "sdkname": "EloamView",
          "name": "物理按键（部分设备适用）",
          "index": 19,
          "create_at": "2021-06-19T16:47:51.960706+08:00"
        }
      ]
    }
  ],
  "windowsapi": [
    {
      "id": 35,
      "results": [
        {
          "id": 290,
          "productname": "EloamDll",
          "functionname": "内存对象函数",
          "name": "增加引用计数",
          "desc": "<pre>\r\n<code>Description:    增加引用计数\r\nInput:          mem 内存句柄\r\nReturn:         返回增加后的引用计数\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamMemory_AddRef(HELOAMMEMORY mem);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-28T14:19:13.546646+08:00",
          "update_at": "2021-08-12T09:58:30.670976+08:00"
        },
        {
          "id": 291,
          "productname": "EloamDll",
          "functionname": "内存对象函数",
          "name": "减少引用计数",
          "desc": "<pre>\r\n<code>Description:    减少引用计数（如果减少为 0 则销毁）\r\nInput:          mem 内存句柄\r\nReturn:         返回减少后的引用计数，为 0 表示已经销毁\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamMemory_Release(HELOAMMEMORY mem);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-28T14:19:55.158107+08:00",
          "update_at": "2021-08-12T09:58:41.130782+08:00"
        },
        {
          "id": 292,
          "productname": "EloamDll",
          "functionname": "内存对象函数",
          "name": "获取 Base64 数据",
          "desc": "<pre>\r\n<code>Description:    获取 Base64 数据\r\nInput:          mem 内存句柄\r\nReturn:         返回 base64 字符串\r\nFunction:       BSTR ELOAMAPI EloamMemory_GetBase64(HELOAMMEMORY mem);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-28T14:20:40.127326+08:00",
          "update_at": "2021-08-12T09:58:53.120915+08:00"
        },
        {
          "id": 293,
          "productname": "EloamDll",
          "functionname": "内存对象函数",
          "name": "创建图像",
          "desc": "<pre>\r\n<code>Description:    创建图像\r\nInput:          mem 内存句柄\r\n                flag 保留，必须为0\r\nReturn:         返回图像句柄，失败为0\r\nFunction:       HELOAMIMAGE ELOAMAPI EloamMemory_CreateImage(HELOAMMEMORY mem, LONG flag);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-06-28T14:21:22.662414+08:00",
          "update_at": "2021-08-12T09:59:14.509864+08:00"
        },
        {
          "id": 294,
          "productname": "EloamDll",
          "functionname": "内存对象函数",
          "name": "保存到文件",
          "desc": "<pre>\r\n<code>Description:    保存到文件\r\nInput:          mem 内存句柄\r\n                filename 文件名\r\nReturn:         成功为TRUE，失败为FALSE\r\nFunction:       BOOL ELOAMAPI EloamMemory_Save(HELOAMMEMORY mem, BSTR fileName);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-06-28T14:22:06.214654+08:00",
          "update_at": "2021-08-12T09:59:19.671172+08:00"
        },
        {
          "id": 295,
          "productname": "EloamDll",
          "functionname": "内存对象函数",
          "name": "获取字符串数据",
          "desc": "<pre>\r\n<code>Description:    获取字符串数据\r\nInput:          mem 内存句柄\r\nReturn:         成功为TRUE，失败为FALSE\r\nFunction:       BOOL ELOAMAPI EloamMemory_GetString(HELOAMMEMORY mem);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 6,
          "create_at": "2021-06-28T14:22:48.264251+08:00",
          "update_at": "2021-08-12T09:59:30.631508+08:00"
        }
      ]
    },
    {
      "id": 34,
      "results": [
        {
          "id": 256,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "增加引用计数",
          "desc": "<pre>\r\n<code>Description:    增加引用计数\r\nInput:          img 图像句柄\r\nReturn:         返回增加后图像的引用计数\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamImage_AddRef(HELOAMIMAGE img);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-28T10:01:11.138226+08:00",
          "update_at": "2021-08-12T09:49:37.919004+08:00"
        },
        {
          "id": 257,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "减少引用计数",
          "desc": "<pre>\r\n<code>Description:    减少引用计数（如果引用计数为 0 则销毁）\r\nInput:          img 图像句柄\r\nReturn:         返回减少后图像的引用计数，为 0 表示图像已经销毁\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamImage_Release(HELOAMIMAGE img);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-28T10:01:49.231105+08:00",
          "update_at": "2021-08-12T09:49:47.647650+08:00"
        },
        {
          "id": 258,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "创建内存块对象",
          "desc": "<pre>\r\n<code>Description:    创建内存块对象\r\nInput:          img 图像句柄\r\n                fmt 图像格式，-1 表示未知，0 表示 bmp，1 表示 ico，2 表示 jpeg，13 表示 png，18 表示 tiff，25 表示 gif\r\n                flag 一般为0（即0x0100），对于jpg格式，0x0080表示高质量（以100:1保存），0x0100表示较高质量（以75:1保存），0x0200表示中等质量（以50:1保存）,0x0400表示较差质量（以25:1保存），0x0800表示差质量（以10:1保存）,1-100的十进制整数x（以x:1保存）\r\nReturn:         返回内存块句柄\r\nFunction:       EXTERN_C HELOAMMEMORY ELOAMAPI EloamImage_CreateMemory(HELOAMIMAGE img, LONG fmt, LONG flag);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-28T10:03:01.676211+08:00",
          "update_at": "2021-08-12T09:49:58.790329+08:00"
        },
        {
          "id": 259,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "拷贝图像",
          "desc": "<pre>\r\n<code>Description:    拷贝图像\r\nInput:          imgDest 目标图像句柄\r\n                imgSrc 源图像句柄\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_Copy(HELOAMIMAGE imgDest, HELOAMIMAGE imgSrc);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-06-28T10:03:55.269866+08:00",
          "update_at": "2021-08-12T09:50:09.334177+08:00"
        },
        {
          "id": 260,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "保存图像",
          "desc": "<pre>\r\n<code>Description:    保存图像\r\nInput:          img 图像句柄\r\n                filename 文件名\r\n                flag 一般为 0（即 0x0100），对于 jpg 格式，0x0080 表示高质量（以 100:1 保存），0x0100表示较高质量（以 75:1 保存），0x0200 表示中等质量（以 50:1 保存）,0x0400 表示较差质量（以 25:1 保存），0x0800 表示差质量（以 10:1 保存）,1-100 的十进制整数 x（以 x:1保存)\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_Save(HELOAMIMAGE img, BSTR fileName, LONG flag);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-06-28T10:05:15.191860+08:00",
          "update_at": "2021-08-12T09:50:20.382243+08:00"
        },
        {
          "id": 261,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "保存图像到 PDF",
          "desc": "<pre>\r\n<code>Description:    保存图像到 PDF\r\nInput:          img 图像句柄\r\n                fmt 图像格式，0 表示 bmp，1 表示 ico，2 表示 jpeg，13 表示 png，18 表示 tiff，25 表示 gif\r\n                fileName 文件名\r\n                flag 一般为 0（即 0x0100），对于 jpg 格式，0x0080 表示高质量（以 100:1 保存），0x0100表示较高质量（以 75:1 保存），0x0200 表示中等质量（以 50:1 保存）,0x0400 表示较差质量（以 25:1 保存），0x0800 表示差质量（以 10:1 保存）,1-100 的十进制整数 x（以 x:1保存）\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_SaveToPDF(HELOAMIMAGE img, LONG fmt, BSTR fileName, LONG flag);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 6,
          "create_at": "2021-06-28T11:00:31.806688+08:00",
          "update_at": "2021-08-12T09:50:33.185897+08:00"
        },
        {
          "id": 262,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "设置识别区域",
          "desc": "<pre>\r\n<code>Description:    设置识别区域\r\nInput:          img 图像句柄\r\n                rect 区域句柄，传 0 表示识别整个区域\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_SetDiscernRect(HELOAMIMAGE img, HELOAMRECT rect);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 7,
          "create_at": "2021-06-28T11:01:22.256209+08:00",
          "update_at": "2021-08-12T09:50:44.430609+08:00"
        },
        {
          "id": 263,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "打印",
          "desc": "<pre>\r\n<code>Description:    打印\r\nInput:          img 图像句柄\r\n                x 打印区域左上角 x 坐标（单位毫米）\r\n                y 打印区域左上角 y 坐标（单位毫米）\r\n                width 打印区域宽度（单位毫米）\r\n                height 打印区域高度（单位毫米）\r\n                printer 打印机名称，为 0 表示使用默认打印机\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_Print(HELOAMIMAGE img, FLOAT x, FLOAT y, FLOAT width, FLOAT height, BSTR printer);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 8,
          "create_at": "2021-06-28T11:04:14.744436+08:00",
          "update_at": "2021-08-12T09:50:56.575150+08:00"
        },
        {
          "id": 264,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "打印",
          "desc": "<pre>\r\n<code>Description:    打印\r\nInput:          img 图像句柄\r\n                x 打印区域左上角 x 坐标（单位毫米）\r\n                y 打印区域左上角 y 坐标（单位毫米）\r\n                printer 打印机名称，为 0 表示使用默认打印机\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_PrintByDPI(HELOAMIMAGE img, FLOAT x, FLOAT y, BSTR printer);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 9,
          "create_at": "2021-06-28T11:05:37.693367+08:00",
          "update_at": "2021-08-12T09:51:09.031441+08:00"
        },
        {
          "id": 265,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "自适应打印",
          "desc": "<pre>\r\n<code>Description:    自适应打印\r\nInput:          img 图像句柄\r\n                width 打印区域宽度（单位毫米）\r\n                height 打印区域高度（单位毫米）\r\n                printer 打印机名称，为 0 表示使用默认打印机\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_AdaptivePrint(HELOAMIMAGE img, FLOAT width, FLOAT height, BSTR printer);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 10,
          "create_at": "2021-06-28T11:06:42.352392+08:00",
          "update_at": "2021-08-12T09:51:22.039197+08:00"
        },
        {
          "id": 266,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "自适应打印",
          "desc": "<pre>\r\n<code>Description:    自适应打印\r\nInput:          img 图像句柄\r\n                printer 打印机名称，为 0 表示使用默认打印机\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_AdaptivePrintByDPI(HELOAMIMAGE img, BSTR printer);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 11,
          "create_at": "2021-06-28T11:07:39.285322+08:00",
          "update_at": "2021-08-12T09:51:35.640363+08:00"
        },
        {
          "id": 267,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "获取图像宽度",
          "desc": "<pre>\r\n<code>Description:    获取图像宽度\r\nInput:          img 图像句柄\r\nReturn:         返回图像宽度\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamImage_GetWidth(HELOAMIMAGE img);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 12,
          "create_at": "2021-06-28T11:08:21.874224+08:00",
          "update_at": "2021-08-12T09:51:49.919105+08:00"
        },
        {
          "id": 268,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "获取图像高度",
          "desc": "<pre>\r\n<code>Description:    获取图像高度\r\nInput:          img 图像句柄\r\nReturn:         返回图像高度\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamImage_GetHeight(HELOAMIMAGE img);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 13,
          "create_at": "2021-06-28T11:09:04.230571+08:00",
          "update_at": "2021-08-12T09:52:02.152647+08:00"
        },
        {
          "id": 269,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "获取通道数",
          "desc": "<pre>\r\n<code>Description:    获取通道数\r\nInput:          iImg 图像句柄\r\nReturn:         返回 3 表示为彩色图像，返回 1 表示灰度图像，返回-1 表示失败\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamImage_GetChannels(HELOAMIMAGE img);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 14,
          "create_at": "2021-06-28T11:09:48.732292+08:00",
          "update_at": "2021-08-12T09:52:16.949038+08:00"
        },
        {
          "id": 270,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "获取每行字节数",
          "desc": "<pre>\r\n<code>Description:    获取每行字节数\r\nInput:          img 图像句柄\r\nReturn:         返回图像每行的字节数，一般为 4 或 8 的倍数\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamImage_GetWidthStep(HELOAMIMAGE img);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 15,
          "create_at": "2021-06-28T11:10:31.413774+08:00",
          "update_at": "2021-08-12T09:52:30.736390+08:00"
        },
        {
          "id": 271,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "获取 XDPI",
          "desc": "<pre>\r\n<code>Description:    获取 XDPI\r\nInput:          img 图像句柄\r\nReturn:         返回 XDPI\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamImage_GetXDPI(HELOAMIMAGE img)</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 16,
          "create_at": "2021-06-28T11:11:12.741125+08:00",
          "update_at": "2021-08-12T09:52:43.718965+08:00"
        },
        {
          "id": 272,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "获取 YDPI",
          "desc": "<pre>\r\n<code>Description:    获取 YDPI\r\nInput:          img 图像句柄\r\nReturn:         返回 YDPI\r\nFunction:       EXTERN_C LONG ELOAMAPI EloamImage_GetYDPI(HELOAMIMAGE img);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 17,
          "create_at": "2021-06-28T11:11:55.669216+08:00",
          "update_at": "2021-08-12T09:52:58.143523+08:00"
        },
        {
          "id": 273,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "设置 XDPI",
          "desc": "<pre>\r\n<code>Description:    设置 XDPI\r\nInput:          img 图像句柄\r\n                Value 新的 XDPI\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_SetXDPI(HELOAMIMAGE img, LONG value);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 18,
          "create_at": "2021-06-28T11:12:43.204112+08:00",
          "update_at": "2021-08-12T09:53:14.821891+08:00"
        },
        {
          "id": 274,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "设置 YDPI",
          "desc": "<pre>\r\n<code>Description:    设置 YDPI\r\nInput:          img 图像句柄\r\n                value 新的 YDPI\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamImage_SetYDPI(HELOAMIMAGE img, LONG value);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 19,
          "create_at": "2021-06-28T11:13:45.374410+08:00",
          "update_at": "2021-08-12T09:53:29.575204+08:00"
        },
        {
          "id": 275,
          "productname": "EloamDll",
          "functionname": "图像函数",
          "name": "获取 Base64 数据",
          "desc": "<pre>\r\n<code>Description:    获取 Base64 数据\r\nInput:          img 图像句柄\r\n                fmt 图像格式，-1 表示未知，0 表示 bmp，1 表示 ico，2 表示 jpeg，13 表示 png，18 表示 tiff，25 表示 gif\r\n                flag 一般为0（即0x0100），对于jpg格式，0x0080表示高质量（以100:1保存），0x0100表示较高质量（以75:1保存），0x0200表示中等质量（以50:1保存）,0x0400表示较差质量（以25:1保存），0x0800表示差质量（以10:1保存）,1-100的十进制整数x（以x:1保存）\r\nReturn:         返回 base64 字符串（fmt 为-1 时返回不带文件头的图片数据的 base64 字符串）\r\nFunction:       EXTERN_C BSTR ELOAMAPI EloamImage_GetBase64(HELOAMIMAGE img, LONG fmt, LONG flag);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 20,
          "create_at": "2021-06-28T11:15:01.846853+08:00",
          "update_at": "2021-08-12T09:53:44.503405+08:00"
        }
      ]
    },
    {
      "id": 33,
      "results": [
        {
          "id": 158,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "销毁字符串（所有返回的字符串都需要用该函数销毁）",
          "desc": "<pre>\r\n<code>Description:    销毁字符串（所有返回的字符串都需要用该函数销毁）\r\nInput:          str 字符串\r\nReturn:         成功为 TRUE，失败为 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamGlobal_DestroyString(BSTR str);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-27T20:25:56.756450+08:00",
          "update_at": "2021-08-12T09:11:14.517708+08:00"
        },
        {
          "id": 159,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建图像",
          "desc": "<pre>\r\n<code>Description:    创建图像\r\nInput:          width 图像宽度\r\n                height 图像高度\r\n                channels 3 表示彩色图像，1 表示灰度图像\r\nReturn:         返回图像句柄，失败为 0\r\nFunction:       EXTERN_C HELOAMIMAGE ELOAMAPI EloamGlobal_CreateImage(LONG width, LONG height, LONG channels);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-27T22:10:45.173342+08:00",
          "update_at": "2021-08-12T09:11:28.056207+08:00"
        },
        {
          "id": 160,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "从文件创建图像",
          "desc": "<pre>\r\n<code>Description:    从文件创建图像\r\nInput:          fileName 文件名\r\n                flag 保留，必须为 0\r\nReturn:         返回图像句柄，失败为 0\r\nFunction:       EXTERN_C HELOAMIMAGE ELOAMAPI EloamGlobal_CreateImageFromFile(BSTR fileName, LONG flag);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-27T22:12:56.785797+08:00",
          "update_at": "2021-08-12T09:11:45.873764+08:00"
        },
        {
          "id": 161,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建图像列表",
          "desc": "<pre>\r\n<code>Description:    创建图像列表\r\nReturn:         返回图像列表句柄，失败为 0\r\nFunction:       EXTERN_C HELOAMIMAGELIST ELOAMAPI EloamGlobal_CreateImageList(void);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-27T22:14:21.500732+08:00",
          "update_at": "2021-08-12T09:11:59.721973+08:00"
        },
        {
          "id": 162,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "从文件创建图像列表",
          "desc": "<pre>\r\n<code>Description:    从文件创建图像列表\r\nInput:          filename 文件名\r\n                flag 保留，必须为 0\r\nReturn:         返回图像列表句柄，失败为 0\r\nFunction:       EXTERN_C HELOAMIMAGELIST ELOAMAPI EloamGlobal_CreateImageListFromFile(BSTR fileName, LONG flag);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-06-27T22:15:44.700267+08:00",
          "update_at": "2021-08-12T09:12:11.888914+08:00"
        },
        {
          "id": 163,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建 FTP 对象",
          "desc": "<p>​​​​​​</p>\r\n\r\n<pre>\r\n<code>Description:    创建 FTP 对象\r\nInput:          ftpPath 服务器路径\r\nReturn:         返回 FTP 对象句柄，失败为 0\r\nFunction:       EXTERN_C HELOAMFTP ELOAMAPI EloamGlobal_CreateFtp(BSTR ftpPath);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 6,
          "create_at": "2021-06-27T22:16:34.776628+08:00",
          "update_at": "2021-08-12T09:12:31.723227+08:00"
        },
        {
          "id": 164,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建 HTTP 对象",
          "desc": "<pre>\r\n<code>Description:    创建 HTTP 对象\r\nInput:          httpPath 服务器路径\r\nReturn:         返回 HTTP 对象句柄，失败为 0\r\nFunction:       EXTERN_C HELOAMHTTP ELOAMAPI EloamGlobal_CreateHttp(BSTR httpPath);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 7,
          "create_at": "2021-06-27T22:17:20.749757+08:00",
          "update_at": "2021-08-12T09:14:03.496714+08:00"
        },
        {
          "id": 165,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建区域对象",
          "desc": "<pre>\r\n<code>Description:    创建区域对象\r\nInput:          X 区域的左上角 x 坐标\r\n                Y 区域的左上角 y 坐标\r\n                Width 区域的宽度\r\n                Height 区域的高度\r\nReturn:         返回区域对象句柄，失败返回 0\r\nFunction:       EXTERN_C HELOAMRECT ELOAMAPI EloamGlobal_CreateRect(LONG x, LONG y, LONG width, LONG height);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 8,
          "create_at": "2021-06-27T22:18:45.429411+08:00",
          "update_at": "2021-08-12T09:14:15.257329+08:00"
        },
        {
          "id": 166,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建区域对象",
          "desc": "<pre>\r\n<code>Description:    创建区域对象\r\nInput:          X1 点 1 的 X 坐标\r\n                Y1 点 1 的 y 坐标\r\n                X2 点 2 的 X 坐标\r\n                Y2 点 2 的 y 坐标\r\n                X3 点 3 的 X 坐标\r\n                Y3 点 3 的 y 坐标\r\n                X4 点 4 的 X 坐标\r\n                Y4 点 4 的 y 坐标\r\nReturn:         返回区域对象句柄，失败返回 0\r\nFunction:       EXTERN_C HELOAMREGION ELOAMAPI EloamGlobal_CreateRegion(LONG x1, LONG y1, LONG x2, LONG y2, LONG x3, LONG y3, LONG x4, LONG y4);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 9,
          "create_at": "2021-06-27T22:19:50.041883+08:00",
          "update_at": "2021-08-12T09:14:30.322001+08:00"
        },
        {
          "id": 167,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建区域对象列表",
          "desc": "<pre>\r\n<code>Description:    创建区域对象列表\r\nReturn:         返回区域对象句柄，失败返回 0\r\nFunction:       EXTERN_C HELOAMREGIONLIST ELOAMAPI EloamGlobal_CreateRegionList(void);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 10,
          "create_at": "2021-06-27T22:21:15.013824+08:00",
          "update_at": "2021-08-12T09:14:44.303430+08:00"
        },
        {
          "id": 168,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建字体对象",
          "desc": "<pre>\r\n<code>Description:    创建字体对象\r\nInput:          height 文字的高度\r\n                width 文字的宽度\r\n                escap 指定移位向量和设备 X 轴之间的一个角度，以十分之一度为单位。移位向量平行于正文行的基线\r\n                orien 指定每个字符的基线和设备 X 轴之间的角度\r\n                thickness 字体的粗细程度\r\n                italic 1 为斜体，0 为非斜体\r\n                underline 1 为画线字体，0 为非画线字体\r\n                strick 1 表示增加删除线，0 表示不增加删除线\r\n                font 字体名，例如：宋体\r\nReturn:         返回字体对象句柄，失败则返回 0\r\nFunction:       EXTERN_C HELOAMFONT ELOAMAPI EloamGlobal_CreateTypeface(LONG height, LONG width, LONG escap, LONG orien, LONG thickness, LONG italic, LONG underline, LONG strike, BSTR font);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 11,
          "create_at": "2021-06-27T22:22:36.858945+08:00",
          "update_at": "2021-08-12T09:14:59.078921+08:00"
        },
        {
          "id": 169,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建空的内存块",
          "desc": "<pre>\r\n<code>Description:    创建空的内存块\r\nReturn:         返回内存块句柄，失败返回 0\r\nFunction:       EXTERN_C HELOAMMEMORY ELOAMAPI EloamGlobal_CreateMemory(void);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 12,
          "create_at": "2021-06-27T22:23:46.067091+08:00",
          "update_at": "2021-08-12T09:15:11.682586+08:00"
        },
        {
          "id": 170,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "从文件创建内存块",
          "desc": "<pre>\r\n<code>Description:    从文件创建内存块\r\nInput:          fileName 文件名\r\nReturn:         返回内存块句柄，失败返回 0\r\nFunction:       EXTERN_C HELOAMMEMORY ELOAMAPI EloamGlobal_CreateMemoryFromFile(BSTR fileName);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 13,
          "create_at": "2021-06-27T22:24:43.692911+08:00",
          "update_at": "2021-08-12T09:15:24.791625+08:00"
        },
        {
          "id": 171,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建显示窗口",
          "desc": "<pre>\r\n<code>Description:    创建显示窗口\r\nInput:          hWnd 父窗口\r\n                rect 区域句柄，只能传 0\r\n                flag 保留值，必须为 0\r\nReturn:         返回显示窗口句柄，失败为 0\r\nFunction:       EXTERN_C HELOAMVIEW ELOAMAPI EloamGlobal_CreateView(HWND hWnd, HELOAMRECT rect, LONG flag);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 14,
          "create_at": "2021-06-27T22:25:34.892465+08:00",
          "update_at": "2021-08-12T09:15:48.168680+08:00"
        },
        {
          "id": 172,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "创建缩略图",
          "desc": "<pre>\r\n<code>Description:    创建缩略图\r\nInput:          hWnd 父窗口\r\n                rect 区域句柄，只能传 0\r\n                flag 0 表示默认，1 表示带 checkbox\r\nReturn:         返回缩略图句柄，失败为 0\r\nFunction:       EXTERN_C HELOAMTHUMBNAIL ELOAMAPI EloamGlobal_CreateThumbnail(HWND hWnd, HELOAMRECT rect, LONG flag);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 15,
          "create_at": "2021-06-27T22:26:28.990499+08:00",
          "update_at": "2021-08-12T09:16:02.928066+08:00"
        },
        {
          "id": 173,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "播放拍照声音",
          "desc": "<pre>\r\n<code>Description:    播放拍照声音\r\nReturn:         成功返回 TRUE,失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamGlobal_PlayCaptureVoice(void);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 16,
          "create_at": "2021-06-27T22:27:08.019725+08:00",
          "update_at": "2021-08-12T09:16:17.008071+08:00"
        },
        {
          "id": 174,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "删除本地文件",
          "desc": "<pre>\r\n<code>Description:    删除本地文件\r\nInput:          filename 文件名\r\nReturn:         成功返回 TRUE，失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamGlobal_DelFile(BSTR fileName);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 17,
          "create_at": "2021-06-27T22:27:47.503333+08:00",
          "update_at": "2021-08-12T09:16:30.303691+08:00"
        },
        {
          "id": 175,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "获取临时文件名",
          "desc": "<pre>\r\n<code>Description:    获取临时文件名\r\nInput:          ext 扩展名\r\nReturn:         返回临时文件名，失败返回 0\r\nFunction:       EXTERN_C BSTR ELOAMAPI EloamGlobal_GetTempName(BSTR ext);\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 18,
          "create_at": "2021-06-27T22:28:38.033381+08:00",
          "update_at": "2021-08-12T09:16:43.882330+08:00"
        },
        {
          "id": 176,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "初始化高拍仪",
          "desc": "<pre>\r\n<code>Description:    初始化高拍仪,（必须在所有其它函数之前调用）\r\nInput:          fun 设备改变回调\r\n                userData 回调用户参数\r\nReturn:         成功返回 TRUE,失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamGlobal_InitDevs(ELOAM_DEVCHANGECALLBACK fun, LPVOID userData);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 19,
          "create_at": "2021-06-27T22:33:44.294738+08:00",
          "update_at": "2021-08-12T09:16:58.495288+08:00"
        },
        {
          "id": 177,
          "productname": "EloamDll",
          "functionname": "全局函数",
          "name": "反初始化高拍仪",
          "desc": "<pre>\r\n<code>Description:    反初始化高拍仪\r\nReturn:         成功返回 TRUE,失败返回 FALSE\r\nFunction:       EXTERN_C BOOL ELOAMAPI EloamGlobal_DeinitDevs(void);</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 20,
          "create_at": "2021-06-27T22:34:19.175173+08:00",
          "update_at": "2021-08-12T09:17:12.441860+08:00"
        }
      ]
    },
    {
      "id": 19,
      "title": "IC卡",
      "results": [
        {
          "id": 69,
          "productname": "EloamView",
          "functionname": "IC卡",
          "name": "初始化IC卡阅读器",
          "desc": "<pre>\r\n<code>Function:       BOOLInitICReader(void)\r\nDescription:    初始化IC卡阅读器\r\nInput:          无\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T16:20:17.164077+08:00",
          "update_at": "2021-08-11T17:40:47.588552+08:00"
        },
        {
          "id": 70,
          "productname": "EloamView",
          "functionname": "IC卡",
          "name": "反初始化IC卡阅读器",
          "desc": "<pre>\r\n<code>Function:       BOOLDeinitICReader(void)\r\nDescription:    反初始化IC卡阅读器\r\nInput:          无\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T16:20:56.011108+08:00",
          "update_at": "2021-08-11T17:41:02.076204+08:00"
        },
        {
          "id": 71,
          "productname": "EloamView",
          "functionname": "IC卡",
          "name": "IC卡阅读器开始读卡",
          "desc": "<pre>\r\n<code>Function:       BOOLICReaderStart(void);\r\nDescription:    IC卡阅读器开始读卡\r\nInput:          无\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-19T16:21:29.567701+08:00",
          "update_at": "2021-08-11T17:42:19.125600+08:00"
        },
        {
          "id": 72,
          "productname": "EloamView",
          "functionname": "IC卡",
          "name": "获取IC卡信息",
          "desc": "<pre>\r\n<code>Function:       BSTR GetICCardInfo(void);\r\nDescription:    获取IC卡信息\r\nInput:          无\r\nOutput:         无   \r\nReturn:         返回IC卡信息\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-19T16:22:01.108074+08:00",
          "update_at": "2021-08-11T17:42:30.405602+08:00"
        },
        {
          "id": 73,
          "productname": "EloamView",
          "functionname": "IC卡",
          "name": "IC卡阅读器开始停止读卡",
          "desc": "<pre>\r\n<code>Function:       BOOLICReaderStop(void);\r\nDescription:    IC卡阅读器开始停止读卡\r\nInput:          无\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-06-19T16:23:03.467064+08:00",
          "update_at": "2021-08-11T17:42:43.657021+08:00"
        }
      ]
    },
    {
      "id": 18,
      "results": [
        {
          "id": 58,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "初始化ID卡阅读器",
          "desc": "<pre>\r\n<code>Function:       BOOL InitIdCard(void);\r\nDescription:    初始化ID卡阅读器\r\nInput:          无\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T16:12:53.674985+08:00",
          "update_at": "2021-08-11T17:37:51.366162+08:00"
        },
        {
          "id": 59,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "反初始化初始化ID卡阅读器",
          "desc": "<pre>\r\n<code>Function:       BOOL DeinitIdCard(void);\r\nDescription:    反初始化初始化ID卡阅读器\r\nInput:          无\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T16:13:31.963357+08:00",
          "update_at": "2021-08-11T17:38:09.750743+08:00"
        },
        {
          "id": 60,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "开启连续读卡",
          "desc": "<pre>\r\n<code>Function:       BOOLStartIdcardReader(void);\r\nDescription:    开启连续读卡\r\nInput:          无           \r\nReturn:         成功返回True失败返回False\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-19T16:14:06.748972+08:00",
          "update_at": "2021-08-11T17:38:22.412003+08:00"
        },
        {
          "id": 61,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "结束连续读卡",
          "desc": "<pre>\r\n<code>Function:       BOOLStopIdcardReader(void);\r\nDescription:    结束连续读卡\r\nInput:          无       \r\nReturn:         成功返回True失败返回False\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-19T16:14:36.831695+08:00",
          "update_at": "2021-08-11T17:38:35.155827+08:00"
        },
        {
          "id": 62,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "读取身份证信息",
          "desc": "<pre>\r\n<code>Function:       BSTRGetIdCardInfo(LPCTSTR picFilePath)\r\nDescription:    读取身份证信息\r\nInput:          picFilePath 头像照片存储路径\r\nReturn:         返回json字符串\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-06-19T16:15:22.267156+08:00",
          "update_at": "2021-08-11T17:38:49.498291+08:00"
        },
        {
          "id": 63,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "读取身份证信息[用于连续读卡]",
          "desc": "<pre>\r\n<code>Function:       BSTRGetIdCardInfoEx(LPCTSTR picFilePath);\r\nDescription:    读取身份证信息[用于连续读卡]\r\nInput:          picFilePath 头像照片存储路径\r\nReturn:         返回json字符串\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-06-19T16:15:54.909191+08:00",
          "update_at": "2021-08-11T17:39:05.673455+08:00"
        },
        {
          "id": 64,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "身份证图像生成类型（需要在读身份证信息后使用）",
          "desc": "<pre>\r\n<code>Function:       BOOLGetIdcardImage(LPCTSTR saveImagePath, LONG flag);\r\nDescription:    身份证图像生成类型（需要在读身份证信息后使用）\r\nInput:          saveImagePath : 图片保存路径\r\n                Flat ： 1表示头像， 2表示正面,3表示反面, 4表示正反垂直合成，\r\n                5表示反正垂直合成， 6表示正反水平合成， 7表示反正水平合成\r\nOutput:         无   \r\nReturn:         成功返回True失败返回False\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 6,
          "create_at": "2021-06-19T16:16:33.445525+08:00",
          "update_at": "2021-08-11T17:39:21.277751+08:00"
        },
        {
          "id": 65,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "读取身份证指纹Base64字符串[用于连续读卡]",
          "desc": "<pre>\r\n<code>Function:       BSTRGetIdCardFingerPrintEx(void);\r\nDescription:    读取身份证指纹Base64字符串[用于连续读卡]\r\nInput:          无\r\nReturn:         返回身份证指纹Base64字符串\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 7,
          "create_at": "2021-06-19T16:17:18.499513+08:00",
          "update_at": "2021-08-11T17:39:36.198419+08:00"
        },
        {
          "id": 66,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "读取身份证指纹Base64字符串[用于手动读取]",
          "desc": "<pre>\r\n<code>Function:       BSTRGetIdCardFingerPrint (void);\r\nDescription:    读取身份证指纹Base64字符串[用于手动读取]\r\nInput:          无\r\nReturn:         返回身份证指纹Base64字符串\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 8,
          "create_at": "2021-06-19T16:17:52.443570+08:00",
          "update_at": "2021-08-11T17:39:49.061170+08:00"
        },
        {
          "id": 67,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "读身份证信息（生成头像、正面照片、反面照片）",
          "desc": "<pre>\r\n<code>Function:       BSTR GetIdCardInformation(LPCTSTR HeadPicFilePath, LPCTSTR FrontPicFilePath, LPCTSTR BackPicFilePath);\r\nDescription:    读身份证信息（生成头像、正面照片、反面照片）\r\nInput:          HeadPicFilePath 头像照片存储路径 ,\r\n                FrontPicFilePath 正面照片存储路径 ,\r\n                BackPicFilePath 反面照片存储路径\r\nOutput:         无   \r\nReturn:         返回json字符串\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 9,
          "create_at": "2021-06-19T16:18:39.618392+08:00",
          "update_at": "2021-08-11T17:40:03.167366+08:00"
        },
        {
          "id": 68,
          "productname": "EloamView",
          "functionname": "身份证",
          "name": "读身份证信息（生成头像base64数据）",
          "desc": "<pre>\r\n<code>Function:       BSTR GetIdCardInfo_base64();\r\nDescription:    读身份证信息（生成头像base64数据）\r\nInput:          无\r\nOutput:         无   \r\nReturn:         返回json字符串\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 10,
          "create_at": "2021-06-19T16:19:23.203356+08:00",
          "update_at": "2021-08-11T17:40:17.701520+08:00"
        }
      ]
    },
    {
      "id": 17,
      "results": [
        {
          "id": 49,
          "productname": "EloamView",
          "functionname": "人脸识别",
          "name": "人证比对（单次，图片与图片比对）",
          "desc": "<pre>\r\n<code>Function:       LONG CompareFaceDetect(LPCTSTR imgPath1, LPCTSTR imgPath2);\r\nDescription:    人证比对（单次，图片与图片比对）\r\nInput:          imgPath1 图片1路径 imgPath2 图片2路径\r\nReturn:         返回比对结果\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T16:01:15.479149+08:00",
          "update_at": "2021-08-11T17:35:32.189996+08:00"
        },
        {
          "id": 50,
          "productname": "EloamView",
          "functionname": "人脸识别",
          "name": "人证比对（单次，摄像头预览于图像比对）",
          "desc": "<pre>\r\n<code>Function:       LONG CompareFaceDetectEx(LONG DevIndex, LPCTSTR ImgPath);\r\nDescription:    人证比对（单次，摄像头预览于图像比对）\r\nInput:          DevIndex 摄像头索引 ImgPath 需比对图片路径\r\nReturn:         返回比对结果\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T16:01:49.694822+08:00",
          "update_at": "2021-08-11T17:35:43.788267+08:00"
        },
        {
          "id": 51,
          "productname": "EloamView",
          "functionname": "人脸识别",
          "name": "人证比对（连续读取，结合事件接口）",
          "desc": "<pre>\r\n<code>Function:       BOOL AutoCompareFaceDetect(LONG DevIndex, LPCTSTR ImgPath);\r\nDescription:    人证比对（连续读取，结合事件接口）\r\nInput:          DevIndex 摄像头索引 ImgPath 需比对图片路径\r\nReturn:         成功返回True 失败返回False\r\nOthers:         结合事件接口CompareFaceDetectEvent获取比对结果</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-19T16:03:10.660790+08:00",
          "update_at": "2021-08-11T17:36:08.267678+08:00"
        },
        {
          "id": 52,
          "productname": "EloamView",
          "functionname": "人脸识别",
          "name": "启用人脸区域",
          "desc": "<pre>\r\n<code>Function:       BOOL EnableFaceRectCrop(LONG iDev, LONG flag);\r\nDescription:    启用人脸区域\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                flag 0为不裁剪1为插裁剪\r\nReturn:         成功返回True 失败返回False\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-19T16:03:40.109004+08:00",
          "update_at": "2021-08-11T17:36:22.886696+08:00"
        },
        {
          "id": 53,
          "productname": "EloamView",
          "functionname": "人脸识别",
          "name": "关闭人脸区域",
          "desc": "<pre>\r\n<code>Function:       BOOL DisableFaceRectCrop(LONG iDev);\r\nDescription:    关闭人脸区域\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\nReturn:         成功返回True 失败返回False\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-06-19T16:04:13.108436+08:00",
          "update_at": "2021-08-11T17:36:36.749451+08:00"
        },
        {
          "id": 54,
          "productname": "EloamView",
          "functionname": "人脸识别",
          "name": "启用活体检测",
          "desc": "<pre>\r\n<code>Function:       BOOL EnableDetectFaceLive(void);\r\nDescription:    启用活体检测\r\nInput:          无\r\nReturn:         成功返回True 失败返回False\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-06-19T16:04:39.021685+08:00",
          "update_at": "2021-08-11T17:36:48.866616+08:00"
        },
        {
          "id": 55,
          "productname": "EloamView",
          "functionname": "人脸识别",
          "name": "关闭活体检测",
          "desc": "<pre>\r\n<code>Function:       BOOL DisableDetectFaceLive(void);\r\nDescription:    关闭活体检测\r\nInput:          无\r\nReturn:         成功返回True 失败返回False\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 6,
          "create_at": "2021-06-19T16:05:07.382503+08:00",
          "update_at": "2021-08-11T17:37:02.501213+08:00"
        },
        {
          "id": 56,
          "productname": "EloamView",
          "functionname": "人脸识别",
          "name": "人脸比对（参数为base64数据）",
          "desc": "<pre>\r\n<code>Function:       BOOL CompareFaceByBase64(LPCTSTR ImageBase64_GA, LPCTSTR ImageBase64_GPY);\r\nDescription:    人脸比对（参数为base64数据）\r\nInput:          ImageBase64_GA  外部传入图片base64数据\r\n                ImageBase64_GPY  高拍仪拍照base64数据  \r\nReturn:         通过返回TRUE，不通过返回FALSE\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 7,
          "create_at": "2021-06-19T16:06:29.342280+08:00",
          "update_at": "2021-08-11T17:37:17.213571+08:00"
        },
        {
          "id": 57,
          "productname": "EloamView",
          "functionname": "人脸识别",
          "name": "人脸比对（参数为base64数据",
          "desc": "<pre>\r\n<code>Function:        LONG CompareFaceByBase64Ex(LPCTSTR ImageBase64_GA, LPCTSTR ImageBase64_GPY);\r\nDescription:    人脸比对（参数为base64数据）\r\nInput:          ImageBase64_GA  外部传入图片base64数据\r\n                ImageBase64_GPY  高拍仪拍照base64数据  \r\nReturn:         返回比对结果\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 8,
          "create_at": "2021-06-19T16:07:38.229719+08:00",
          "update_at": "2021-08-11T17:37:31.468406+08:00"
        }
      ]
    },
    {
      "id": 16,
      "results": [
        {
          "id": 47,
          "productname": "EloamView",
          "functionname": "条码，二维码识别",
          "name": "获取条码，二维码的数量",
          "desc": "<pre>\r\n<code>Function:       LONG GetBarcodeCount(LONG iDev, BSTR filePath, BOOL bFile);\r\nDescription:    获取条码，二维码的数量\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                filePath 图片文件全路径(若是识别视频画面条码则可为\"\")\r\n                bFile true表示根据识别传入图片的条码 false表示识别视频画面条码\r\nReturn:         返回条码数量\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T15:59:22.356994+08:00",
          "update_at": "2021-08-11T17:34:55.490346+08:00"
        },
        {
          "id": 48,
          "productname": "EloamView",
          "functionname": "条码，二维码识别",
          "name": "根据条码索引获取条码，二维码",
          "desc": "<pre>\r\n<code>Function:       BSTR GetBarcode(LONG iDev, BSTR filePath, BOOL bFile,LONG iBar);\r\nDescription:    根据条码索引获取条码，二维码\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                filePath 图片文件全路径(若是识别视频画面条码则可为\"\")\r\n                bFile true表示根据识别传入图片的条码 false表示识别视频画面条码\r\n                iBar 条码索引，索引从0开始\r\nReturn:         返回识别的条码\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T16:00:00.796880+08:00",
          "update_at": "2021-08-11T17:35:05.989821+08:00"
        }
      ]
    },
    {
      "id": 15,
      "results": [
        {
          "id": 43,
          "productname": "EloamView",
          "functionname": "水印",
          "name": "设置高拍仪水印",
          "desc": "<pre>\r\n<code>Function:       BOOL  AddWaterMark(LONG SetFlat, LONG Pos, LPCTSTR Content, LPCTSTR Clr, LONG Weight);\r\nDescription:    设置高拍仪水印\r\nInput:          SetFlat: 水印开启标志，0为关闭，1以默认参数设置2以自定义参数设置\r\n                Pos: 位置， 1左上, 2右上, 3左下, 4右下，5中心\r\n                Content: 绘制的文本\r\n                Clr: 颜色，RGB色值，如黑色: “000000000” 纯红：“255000000”\r\n                Weight： 透明度, 取值范围0-255, 0表示完全不透明， 为255表示完全透明\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T15:48:55.137843+08:00",
          "update_at": "2021-08-11T17:33:54.309689+08:00"
        },
        {
          "id": 44,
          "productname": "EloamView",
          "functionname": "水印",
          "name": "开启高拍仪预览时间水印",
          "desc": "<pre>\r\n<code>Function：       BOOL AddDateWaterMark(LONG nPos, LPCTSTR nClr, LONG nWeight)；\r\nDescription:    开启高拍仪预览时间水印\r\nInput:          SetFlat: 水印开启标志，0为关闭，1以默认参数设置2以自定义参数设置\r\n                Pos: 位置， 1左上, 2右上, 3左下, 4右下，5中心\r\n                Content: 绘制的文本\r\n                Clr: 颜色，RGB色值，如黑色: “000000000” 纯红：“255000000”\r\n                Weight： 透明度, 取值范围0-255, 0表示完全不透明， 为255表示完全透明\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T15:56:09.150264+08:00",
          "update_at": "2021-08-11T17:34:07.709763+08:00"
        },
        {
          "id": 45,
          "productname": "EloamView",
          "functionname": "水印",
          "name": "关闭高拍仪预览时间水印",
          "desc": "<pre>\r\n<code>Function：       BOOL UnAddDataWaterMark(void)；\r\nDescription:    关闭高拍仪预览时间水印\r\nInput:          \r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-19T15:56:49.166670+08:00",
          "update_at": "2021-08-11T17:34:21.117277+08:00"
        },
        {
          "id": 46,
          "productname": "EloamView",
          "functionname": "水印",
          "name": "设置录像时间水印",
          "desc": "<pre>\r\n<code>Function:       BOOL SetVideoWaterMark(LONG nFlag);\r\nDescription:    设置录像时间水印\r\nInput:           nFlag  1表示开启，其余表示关闭\r\n                lHeight  水印字体大小\r\n                lWeight  水印字体宽度\r\n                lWatePos 水印位置 0右下角 1左下角 2右上角 3左上角\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-19T15:57:33.500034+08:00",
          "update_at": "2021-08-11T17:34:34.796391+08:00"
        }
      ]
    },
    {
      "id": 14,
      "results": [
        {
          "id": 40,
          "productname": "EloamView",
          "functionname": "功能操作",
          "name": "删除本地文件",
          "desc": "<pre>\r\n<code>Function:       BOOL DeleteFile(LPCTSTR fileName);\r\nDescription:    删除本地文件\r\nInput:          fileName：本地文件路径\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T15:46:25.079467+08:00",
          "update_at": "2021-08-11T17:33:05.431472+08:00"
        },
        {
          "id": 41,
          "productname": "EloamView",
          "functionname": "功能操作",
          "name": "打印本地图片",
          "desc": "<pre>\r\n<code>Function:       BOOL PrintImage(LPCTSTR imgPath);\r\nDescription:    打印本地图片\r\nInput:          imgPath 图片路径\r\nReturn:         成功返回True 失败返回False\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T15:46:50.790486+08:00",
          "update_at": "2021-08-11T17:33:23.129789+08:00"
        },
        {
          "id": 42,
          "productname": "EloamView",
          "functionname": "功能操作",
          "name": "获取临时目录",
          "desc": "<pre>\r\n<code>Function:         BSTR GetTemppath(void);\r\nDescription:    获取临时目录\r\nInput:          无\r\nOutput:         无   \r\nReturn:         临时目录\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-19T15:47:29.089019+08:00",
          "update_at": "2021-08-11T17:33:35.572087+08:00"
        }
      ]
    },
    {
      "id": 13,
      "results": [
        {
          "id": 38,
          "productname": "EloamView",
          "functionname": "PDF",
          "name": "生成pdf文件",
          "desc": "<pre>\r\n<code>Function:       BOOL  SaveToPdfEx(LPCTSTR PdfPath, LPCTSTR FilePathList, LONG FileCount);\r\nDescription:    生成pdf文件     \r\nInput:          PdfPath 保存的pdf路径文件名\r\nFilePathList 需要目标图片路径，以“+”为间隔符，如“C:\\\\1.jpg+C:\\\\2.jpg+C:\\\\3.jpg+”\r\n                FileCount 要保存的图像的数目                  \r\nReturn:         TRUE表示成功 FALSE表示失败</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T15:44:32.464475+08:00",
          "update_at": "2021-08-11T17:32:32.246042+08:00"
        },
        {
          "id": 39,
          "productname": "EloamView",
          "functionname": "PDF",
          "name": "文件转成base64",
          "desc": "<pre>\r\n<code>Function:       BSTR  GetBase64FromFileEx(LPCTSTR FilePath);\r\nDescription:    文件转成base64\r\nInput:          FilePath    目标文件路径\r\nOutput:         无   \r\nReturn:         返回base64数据\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T15:45:13.728213+08:00",
          "update_at": "2021-08-11T17:32:44.712506+08:00"
        }
      ]
    },
    {
      "id": 12,
      "results": [
        {
          "id": 36,
          "productname": "EloamView",
          "functionname": "录像",
          "name": "启用视频录像",
          "desc": "<pre>\r\n<code>Function:       BOOL StartRecord(LPCTSTR filePath, LONG iFrameRate);\r\nDescription:    启用视频录像\r\nInput:          filePath：文件保存位置\r\n                iFrameRate：帧率\r\nReturn:         成功返回True 失败返回False\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T15:41:54.072505+08:00",
          "update_at": "2021-08-11T17:29:57.985422+08:00"
        },
        {
          "id": 37,
          "productname": "EloamView",
          "functionname": "录像",
          "name": "结束视频录像",
          "desc": "<pre>\r\n<code>Function:       void StopRecord(void);\r\nDescription:    结束视频录像\r\nInput:\r\nReturn:         无\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T15:42:29.560429+08:00",
          "update_at": "2021-08-11T17:30:11.468080+08:00"
        }
      ]
    },
    {
      "id": 11,
      "results": [
        {
          "id": 26,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "拍照",
          "desc": "<pre>\r\n<code>Function:       BOOL Scan(LONG iDev, BSTR filePath, LONG flag);\r\nDescription:    拍照\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\n                filePath：保存文件路径\r\n                flag：一般为 0（即 0x0100），对于 jpg 格式，0x0080 表示高质量（以100:1保存），0x0100表示较高质量（以 75:1 保存），0x0200 表示中等质量（以 50:1 保存）,0x0400 表示较差质量（以 25:1 保存），0x0800 表示差质量（以 10:1 保存）,1-100  的十进制整数 x（以 x:1保存）\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T15:22:06.640789+08:00",
          "update_at": "2021-08-11T17:27:07.760663+08:00"
        },
        {
          "id": 27,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "自动连拍",
          "desc": "<pre>\r\n<code>Function：       BOOL  AutoScan(LONG iDev, LPCTSTR filePath, LPCTSTR filename, LONG flat)\r\nDescription:    自动连拍\r\nInput:          iDev 摄像头索引  0表示主摄像头 \r\nfilePath 图片路径 如 C:\\\\new\\\\, 图片保存到C盘下的new文件夹中，路径要以“\\\\”结尾\r\n                filename 图片名称，不带后缀名，如photo_01、photo_02\r\n                flat  0 为关闭自动连拍，1 为开启自动连拍\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         只能用于主头，结合事件接口AutoScanEvent获取图片路径</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T15:32:46.376205+08:00",
          "update_at": "2021-08-11T17:27:21.103743+08:00"
        },
        {
          "id": 28,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "文字方向判断",
          "desc": "<pre>\r\n<code>Function：       void  TextDirectionJudg(SHORT  SetFlat)；\r\nDescription:    文字方向判断（效果字体正向呈现）（xp系统下不支持）\r\nInput:          关闭： SetFlat = 0 ， 开启 SetFlat = 1\r\nOutput:         无   \r\nReturn:         无\r\nOthers:         如果需要保证字体方向正向展示，请在拍照前调用</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-19T15:34:19.689217+08:00",
          "update_at": "2021-08-11T17:27:34.920251+08:00"
        },
        {
          "id": 29,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "获取base64数据",
          "desc": "<pre>\r\n<code>Function:       BSTR GetBase64(LONG iDev, LONG fmt, LONG flag);\r\nDescription:    获取base64数据\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                fmt 图像格式，-1 表示未知，0 表示 bmp，1 表示 ico，2 表示 jpeg，               13 表示 png，18 表示 tiff，25 表示 gif\r\n               flag 一般为0（即0x0100），对于jpg格式，0x0080表示高质量（以100:1保存），0x0100表示较高质量（以75:1保存），0x0200表示中等质量（以50:1保存）,0x0400表示较差质量（以25:1保存），0x0800表示差质量（以10:1保存）,1-100的十进制整数x（以x:1保存）\r\nReturn:         返回base64数据\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-19T15:34:49.689679+08:00",
          "update_at": "2021-08-11T17:27:48.054066+08:00"
        },
        {
          "id": 30,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "根据base64数据保存图片",
          "desc": "<pre>\r\n<code>Function:       BOOL SaveFileByBase64(LPCTSTR ImageBase64, LPCTSTR FilePath);\r\nDescription:    根据base64数据保存图片\r\nInput:          ImageBase64  base64数据\r\n                FilePath     保存图片路径 \r\nReturn:         成功返回TRUE，失败返回FALSE\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-06-19T15:36:00.625026+08:00",
          "update_at": "2021-08-11T17:27:59.285761+08:00"
        },
        {
          "id": 31,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "设置DPI",
          "desc": "<pre>\r\n<code>Function:       BOOL SetDPI(LONG nFlag, LONG nXDpi, LONG nYDpi);\r\nDescription:    设置DPI\r\nInput:          nFlag   设置标志，0 表示默认dpi；1 表示为，以指定值设置dpi\r\n                nXDpi   要设置的XDpi值   \r\n                nYDpi   要设置的YDpi值\r\nReturn:         成功返回TRUE，失败返回FALSE\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-06-19T15:37:05.818335+08:00",
          "update_at": "2021-08-11T17:28:10.672540+08:00"
        },
        {
          "id": 32,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "图片色彩设置",
          "desc": "<pre>\r\n<code>Function:       BOOL ColorMode(LONG Mode);\r\nDescription:    图片色彩设置\r\nInput:          Mode 0：彩色；1：灰度；2：黑白；3：去底色；\r\n4：印章增强；5：反色\r\nReturn:         通过返回TRUE，不通过返回FALSE\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 6,
          "create_at": "2021-06-19T15:39:10.010254+08:00",
          "update_at": "2021-08-11T17:28:22.166356+08:00"
        },
        {
          "id": 33,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "将图片数据写进共享内存中",
          "desc": "<pre>\r\n<code>Function:       BOOL WirteImageData(LONG iDev);\r\nDescription:    将图片数据写进共享内存中\r\nInput:          iDev 摄像头索引  0表示主摄像头 1表示副摄像头 \r\nOutput:         无   \r\nReturn:         成功返回true，失败返回false\r\nother:          模块名称：ElFileMap\r\n数据类型：\r\n                      #define  IMAGEMAX 50000000\r\n                      struct BYImage \r\n                      {\r\n                      int version;\r\n                      int channels;\r\n                      int width;\r\n                      int height;\r\n                      int step;\r\n                      unsigned char reserve[128];\r\n                      unsigned char image[IMAGEMAX];\r\n  };</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 7,
          "create_at": "2021-06-19T15:39:39.656657+08:00",
          "update_at": "2021-08-11T17:28:44.782783+08:00"
        },
        {
          "id": 34,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "预览图片合成",
          "desc": "<pre>\r\n<code>Function:       BOOL ComposeImage(VARIANT_BOOL Flag, LONG Space, LONG Position);\r\nDescription:    预览图片合成\r\nInput:          Flag: true表示开启，false表示关闭\r\n                Space：图片之间的间隔\r\n                Position：合成图片位置效果，0为垂直，1为水平\r\nOutput:         无   \r\nReturn:         成功返回true，失败返回false</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 8,
          "create_at": "2021-06-19T15:40:23.719695+08:00",
          "update_at": "2021-08-11T17:28:58.750000+08:00"
        },
        {
          "id": 35,
          "productname": "EloamView",
          "functionname": "拍照",
          "name": "本地图片合成",
          "desc": "<pre>\r\n<code>Function:       BOOL ComposeImageEx(LPCTSTR ImagePathA, LPCTSTR ImagePathB, \r\n                    LPCTSTR ImagePath, LONG Space, LONG Position);\r\nDescription:    本地图片合成\r\nInput:          ImagePathA：合成原图1绝对路径\r\n                ImagePathB：合成原图2绝对路径\r\n                ImagePath: 合成后的图片绝对路径\r\n                Space：图片之间的间隔\r\n                Position：合成图片位置效果，0为垂直，1为水平\r\nOutput:         无   \r\nReturn:         成功返回true，失败返回false</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 9,
          "create_at": "2021-06-19T15:40:56.657100+08:00",
          "update_at": "2021-08-11T17:29:13.179833+08:00"
        }
      ]
    },
    {
      "id": 10,
      "results": [
        {
          "id": 11,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "获取摄像头分辨率",
          "desc": "<pre>\r\n<code>Function:       long GetResolutionNumber(long iDev);\r\nDescription:    获取指定摄像头所有分辨率数量\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\nReturn:         返回所有分辨率数量,失败返回-1\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T15:07:33.636150+08:00",
          "update_at": "2021-08-11T17:22:50.143997+08:00"
        },
        {
          "id": 12,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "获取指定摄像头指定模式所有分辨率数量",
          "desc": "<pre>\r\n<code>Function:       LONG GetResolutionNumberEx(LONG iDev, LONG iMode);\r\nDescription:    获取指定摄像头指定模式所有分辨率数量\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\n                iMode：视频模式0表示YUY2模式 1表示MJPG模式\r\nReturn:         返回所有分辨率数量,失败返回-1\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T15:09:07.506401+08:00",
          "update_at": "2021-08-11T17:23:03.247510+08:00"
        },
        {
          "id": 13,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "根据索引获取指定摄像头分辨率",
          "desc": "<pre>\r\n<code>Function:       BSTR GetResolution(long iDev,long iResolutoin);\r\nDescription:    根据索引获取指定摄像头分辨率\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\nReturn:         返回该索引的分辨率，分辨率格式:分辨率长x分辨率宽，如\"2592x1944\"\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-19T15:10:02.274732+08:00",
          "update_at": "2021-08-11T17:23:15.565283+08:00"
        },
        {
          "id": 14,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "切换指定摄像头分辨率",
          "desc": "<pre>\r\n<code>Function:       BOOL SetResolution(long iDev,long iResolution);\r\nDescription:    切换指定摄像头分辨率\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\n                resolution：分辨率索引\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-19T15:11:24.152076+08:00",
          "update_at": "2021-08-11T17:23:28.768127+08:00"
        },
        {
          "id": 15,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "设置框选部分视频预览图像",
          "desc": "<pre>\r\n<code>Function:       BOOL SetPreviewWindow(long iDev,long x,long y,long w,long h);\r\nDescription:    设置框选部分视频预览图像\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\n                x：视频画面左上x坐标\r\n                y：视频画面左上y坐标\r\n                w：视频画面长度\r\n                h：视频画面高度\r\n                若x,y,w,h均为0，则为取消部分预览，恢复原图预览\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-06-19T15:11:57.186365+08:00",
          "update_at": "2021-08-11T17:23:40.967903+08:00"
        },
        {
          "id": 16,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "纠偏",
          "desc": "<pre>\r\n<code>Function:       BOOL Deskew(long iDev,BOOL bOpen);\r\nDescription:    纠偏\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\n                bOpen：是否启用纠偏 TRUE 表示启用 FALSE 表示关闭\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-06-19T15:13:01.465769+08:00",
          "update_at": "2021-08-11T17:23:53.236917+08:00"
        },
        {
          "id": 17,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "设置图像格式",
          "desc": "<pre>\r\n<code>Function:       BOOL ImageFormat(long iDev,long iFormat);\r\nDescription:    设置图像格式\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\n                iFormat ：图像格式 0表示彩色 1表示黑白 2表示灰度\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 6,
          "create_at": "2021-06-19T15:13:34.833315+08:00",
          "update_at": "2021-08-11T17:24:24.121907+08:00"
        },
        {
          "id": 18,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "图像旋转",
          "desc": "<pre>\r\n<code>Function:       BOOL VideoRotate(long iDev,long iRotate);\r\nDescription:    图像旋转\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\n                iRotate：图像格式 0表示90° 1表示旋转180° 2表示旋转270°\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 7,
          "create_at": "2021-06-19T15:14:03.244720+08:00",
          "update_at": "2021-08-11T17:24:40.221532+08:00"
        },
        {
          "id": 19,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "显示摄像头属性界面",
          "desc": "<pre>\r\n<code>Function:       BOOL ShowProperty(long iDev);\r\nDescription:    显示摄像头属性界面\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 8,
          "create_at": "2021-06-19T15:14:32.601012+08:00",
          "update_at": "2021-08-11T17:24:55.781975+08:00"
        },
        {
          "id": 20,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "切换YUY2或MJPG模式",
          "desc": "<pre>\r\n<code>Function:       BOOL SetMode(long iDev,long iMode);\r\nDescription:    切换YUY2或MJPG模式\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                iMode 0表示YUY2模式 1表示MJPG模式\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 9,
          "create_at": "2021-06-19T15:15:07.000297+08:00",
          "update_at": "2021-08-11T17:25:13.047164+08:00"
        },
        {
          "id": 21,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "设置框选",
          "desc": "<pre>\r\n<code>Function:       BOOL SetState(long iDev,BOOL iState);\r\nDescription:    设置框选\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                iState TRUE表示启用框选 FALSE表示关闭框选\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 10,
          "create_at": "2021-06-19T15:15:53.792455+08:00",
          "update_at": "2021-08-11T17:25:25.606322+08:00"
        },
        {
          "id": 22,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "根据索引获取指定摄像头分辨率宽",
          "desc": "<pre>\r\n<code>Function:       BSTR GetResolutionWidth(long iDev,long iResolutoin);\r\nDescription:    根据索引获取指定摄像头分辨率宽\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                iResolutoin 分辨率索引\r\nReturn:         返回该索引的分辨率宽\r\nOthers:     </code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 11,
          "create_at": "2021-06-19T15:16:30.497964+08:00",
          "update_at": "2021-08-11T17:25:39.245649+08:00"
        },
        {
          "id": 23,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "根据索引获取指定摄像头分辨率高",
          "desc": "<pre>\r\n<code>Function:       BSTR GetResolutionHeight(long iDev,long iResolutoin);\r\nDescription:    根据索引获取指定摄像头分辨率高\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                iResolutoin 分辨率索引\r\nReturn:         返回该索引的分辨率高\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 12,
          "create_at": "2021-06-19T15:16:58.243458+08:00",
          "update_at": "2021-08-11T17:25:52.792268+08:00"
        },
        {
          "id": 24,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "设置部分视频预览图像",
          "desc": "<pre>\r\n<code>Function:       BOOL SetDisplayRect(long iDev,long x,long y,long w,long h);\r\nDescription:    设置部分视频预览图像\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                x 视频画面左上x坐标\r\n                y 视频画面左上y坐标\r\n                w 视频画面长度\r\n                h 视频画面高度\r\n                若x,y,w,h均为0，则为取消部分预览，恢复原图预览\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 13,
          "create_at": "2021-06-19T15:17:41.210108+08:00",
          "update_at": "2021-08-11T17:26:06.422426+08:00"
        },
        {
          "id": 25,
          "productname": "EloamView",
          "functionname": "图像",
          "name": "设置背景颜色",
          "desc": "<pre>\r\n<code>Function:       BOOL SetBkColor(LPCTSTR Clr);\r\nDescription:    设置背景颜色\r\nInput:          Clr:RGB色值，三位一组，共9位，如[‘000000000’, ‘255000000’]\r\nOutput:         无   \r\nReturn:         成功返回true，失败返回false</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 14,
          "create_at": "2021-06-19T15:21:00.327094+08:00",
          "update_at": "2021-08-11T17:26:23.117496+08:00"
        }
      ]
    },
    {
      "id": 9,
      "results": [
        {
          "id": 5,
          "productname": "EloamView",
          "functionname": "设备",
          "name": "初始化设备",
          "desc": "<pre>\r\n<code>Function:       BOOL InitDev();\r\nDescription:    初始化设备\r\nInput:          无\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T14:47:52.436572+08:00",
          "update_at": "2021-08-11T17:19:46.091877+08:00"
        },
        {
          "id": 6,
          "productname": "EloamView",
          "functionname": "设备",
          "name": "反初始化设备",
          "desc": "<pre>\r\n<code>Function:       BOOL DeInitDev();\r\nDescription:    反初始化设备\r\nInput:          无\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T14:52:20.676323+08:00",
          "update_at": "2021-08-11T17:20:07.130691+08:00"
        },
        {
          "id": 7,
          "productname": "EloamView",
          "functionname": "设备",
          "name": "打开设备",
          "desc": "<p>常规设备有两种打开方式：OpenVideo、OpenVideoEx。<br />\r\nBS2000系列的设备和BS3000系列的设备必须使用BS2000设备专用的接口打开：OpenCamera</p>\r\n\r\n<pre>\r\n<code>Function:       BOOL OpenVideo(long iDev);\r\nDescription:    打开设备，摄像头模式和分辨率用的默认值\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<pre>\r\n<code>Function:       BOOL OpenCamera(long iDev);\r\nDescription:    打开设备（BS2000设备专用，预览分辨率固定300W，出图1800W）\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无\r\n</code></pre>\r\n\r\n<pre>\r\n<code>Function:       BOOL OpenVideoEx(LONG iDev, LONG iMode, LONG iResolution)\r\nDescription:    打开设备\r\nInput:          iDev： 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                iMode：视频模式0表示YUY2模式 1表示MJPG模式\r\n                iResolution：分辨率索引，从0开始，iResolution越大分辨率越小\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-19T14:58:24.748677+08:00",
          "update_at": "2021-08-11T17:20:53.153127+08:00"
        },
        {
          "id": 8,
          "productname": "EloamView",
          "functionname": "设备",
          "name": "关闭设备",
          "desc": "<pre>\r\n<code>Function:       BOOL CloseVideo(long iDev);\r\nDescription:    关闭设备\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-19T15:03:17.100680+08:00",
          "update_at": "2021-08-11T17:21:12.816000+08:00"
        },
        {
          "id": 9,
          "productname": "EloamView",
          "functionname": "设备",
          "name": "获取设备状态",
          "desc": "<pre>\r\n<code>Function:       LONG GetState(LONG iDev);\r\nDescription:    获取设备状态\r\nInput:          iDev 摄像头索引  0表示主摄像头 1表示副摄像头\r\nOutput:         无   \r\nReturn:         返回设备的状态，-1 表示设备已断开或未连接 0 表示空闲，\r\n                1 表示打开中，2 表示使用中\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-06-19T15:04:43.620679+08:00",
          "update_at": "2021-08-11T17:21:27.799736+08:00"
        },
        {
          "id": 10,
          "productname": "EloamView",
          "functionname": "设备",
          "name": "设置A3A4自动切换",
          "desc": "<pre>\r\n<code>Function:       BOOL SetA3A4Mark(FLOAT A3Size, FLOAT A4Size);\r\nDescription:    设置A3A4切换灵敏度（1840双摄专用）\r\nInput:          A3Size：默认设置值为0.5\r\n                A4Size：默认设置值为0.86\r\nOutput:         无   \r\nReturn:         成功返回true，失败返回false</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-06-19T15:05:49.868715+08:00",
          "update_at": "2021-08-11T17:21:41.087341+08:00"
        }
      ]
    },
    {
      "id": 5,
      "results": [
        {
          "id": 147,
          "productname": "WebCamera",
          "functionname": "OCR",
          "name": "OCR",
          "desc": "<h3>请求说明： OCR</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=ocr</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"ocrflag\": \"1\",\r\n    \"picfilepath\": \"D://ocr1.jpg\",\r\n    \"savefilepath\": \"D://ocr.pdf\"   // 支持PDF，docx, xlsx\r\n}</code></pre>\r\n\r\n<p>返回成功：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"data\": \"\"          // 识别出的文字\r\n}</code></pre>\r\n\r\n<p>返回失败：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"1\",\r\n    \"message\": \"false\",\r\n    \"data\": \"OCR识别图片失败\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T20:58:15.638649+08:00",
          "update_at": "2021-08-11T18:25:21.377616+08:00"
        }
      ]
    },
    {
      "id": 4,
      "results": [
        {
          "id": 145,
          "productname": "WebCamera",
          "functionname": "人脸",
          "name": "人证比对",
          "desc": "<h3>请求说明： 人证比对</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/comparison=imgdata</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"FaceOne\": \"\",  // 图片1的base64数据，如人脸\r\n    \"FaceTwo\": \"\"   // 图片2的base64数据，如身份证头像\r\n}</code></pre>\r\n\r\n<p>返回参数-成功：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"data\": \"70\"       // 比对值，大于50可以认为是同一个人\r\n}</code></pre>\r\n\r\n<p>返回参数-失败：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"2\",\r\n    \"message\": \"false\",\r\n    \"data\": \"创建图片1内存模块失败\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T20:55:31.606195+08:00",
          "update_at": "2021-08-11T18:23:27.941700+08:00"
        },
        {
          "id": 146,
          "productname": "WebCamera",
          "functionname": "人脸",
          "name": "活体比对",
          "desc": "<h3>请求说明： 活体比对</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/faceLive=start</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"time\": \"20\"    // 超时时间\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"data\": \"1\"       // 比对结果，-1:失败；0:图片；1:成功\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-19T20:56:36.197531+08:00",
          "update_at": "2021-08-11T18:24:11.206596+08:00"
        }
      ]
    },
    {
      "id": 2,
      "results": [
        {
          "id": 144,
          "productname": "WebCamera",
          "functionname": "卡证读取",
          "name": "读取二代身份证",
          "desc": "<h3>请求说明： 读取二代身份证</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/card=idcard</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：无</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>返回参数 - 成功：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"IDCardInfo\": {\r\n        \"name\": \"\",          // 姓名\r\n        \"sex\": \"\",           // 性别\r\n        \"birthday\": \"\",      // 生日\r\n        \"address\": \"\",       // 地址\r\n        \"cardID\": \"\",        // 身份证号\r\n        \"issueOrgan\": \"\",    // 发卡机构\r\n        \"validStart\": \"\",    // 有效起始时间\r\n        \"validEnd\": \"\",      // 有效终止时间\r\n        \"sexCode\": \"\",       // 性别代码\r\n        \"nationCode\": \"\",    // 民族代码\r\n        \"appendMsg\": \"\",     // 附加信息\r\n        \"photoBase64\": \"\",   // 人脸照片的base64数据\r\n        \"photoBase64_Z\": \"\", // 身份证正面图像的base64数据\r\n        \"photoBase64_F\": \"\"  // 身份证反面图像的base64数据\r\n        \"strIDUID\":\"\"        //身份证UID\r\n    }\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T20:53:25.285139+08:00",
          "update_at": "2021-08-11T18:18:57.839052+08:00"
        },
        {
          "id": 532,
          "productname": "WebCamera",
          "functionname": "卡证读取",
          "name": "读取IC卡",
          "desc": "<h3>请求说明： 读取IC卡信息</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/card=iccard</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"iccardtype\": \"1\"  // 必选，参数：1：IC卡；2：M1卡；3：MEMORY卡；4：CPU卡；5：SOCIAL社保卡；7：SHENZHENTONG卡\r\n}</code></pre>\r\n\r\n<p>返回参数-M1成功：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"strICUID\": \"AB CD EF GH \"\r\n    }\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>返回参数-M1失败：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"\",      // 非0\r\n    \"message\": \"\"    // 失败原因\r\n}</code></pre>\r\n\r\n<h5>返回参数 - SOCIAL社保卡成功：</h5>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"socialardinfo\": {\r\n        \"idnumber\": \"\",       // 身份证号\r\n        \"name\": \"\",           // 姓名\r\n        \"sex\": \"\",            // 性别\r\n        \"nation\": \"\",         // 民族\r\n        \"birthdate\": \"\",      // 生日\r\n        \"cardissuedate\": \"\",  // 签发日期\r\n        \"cardeffecdate\": \"\",  // 有效日期\r\n        \"cardnumber\": \"\",     // 卡号\r\n    }\r\n}</code></pre>\r\n\r\n<h5>返回参数 - SOCIAL社保卡失败：</h5>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"\",      // 非0\r\n    \"message\": \"\"    // 失败原因\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-07-15T14:33:48.526631+08:00",
          "update_at": "2021-08-11T18:20:38.495060+08:00"
        }
      ]
    },
    {
      "id": 1,
      "results": [
        {
          "id": 1,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "获取摄像头视频数据",
          "desc": "<pre>\r\n<code>Description:    获取主摄像头视频数据\r\nURL:            http://127.0.0.1:38088/video=stream&amp;camidx=0\r\nMethod:         GET</code></pre>\r\n\r\n<pre>\r\n<code>Description:    获取副摄像头视频数据\r\nURl:            http://127.0.0.1:38088/video=stream&amp;camidx=1\r\nMethod:         GET</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-08T20:27:07.228205+08:00",
          "update_at": "2021-08-11T16:02:19.786350+08:00"
        },
        {
          "id": 139,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "关闭视频画面",
          "desc": "<p>请求说明： 关闭视频</p>\r\n\r\n<p>请求地址： http://127.0.0.1:38088/video=close</p>\r\n\r\n<p>请求方式： POST</p>\r\n\r\n<p>请求参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"camidx\": \"0\"  // 摄像头索引，0:主头，1:副头\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-06-19T20:45:44.856822+08:00",
          "update_at": "2021-08-11T16:03:31.331346+08:00"
        },
        {
          "id": 2,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "获取摄像头分辨率",
          "desc": "<h3>&nbsp;请求说明： 获取摄像头分辨率</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/device=getresolution</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"camidx\": \"0\",  // 必选，摄像头，0：主头，1：副头\r\n    \"mode\": \"0\"     // 必选，视频模式，0：YUY2（高清），1：MJPG（高速）\r\n}</code></pre>\r\n\r\n<h3>返回参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"data\": \"1280*720|1024*768|800*600|640*480\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-06-08T23:55:53.465443+08:00",
          "update_at": "2021-08-11T18:03:05.021732+08:00"
        },
        {
          "id": 509,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "设置摄像头显示分辨率",
          "desc": "<h3>请求说明： 设置摄像头显示分辨率（请在打开视频前调用）</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/device=setresolution</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"camidx\": \"0\",     // 摄像头，0：主头；1：副头   \r\n    \"mode\": \"0\",       // 视频模式，0：YUY2（高清）；1：MJPG（高速）\r\n    \"width\": \"1280\",   // 视频宽度\r\n    \"height\": \"1024\"   // 视频高度\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 1,
          "create_at": "2021-07-02T10:19:29.150094+08:00",
          "update_at": "2021-08-11T18:04:13.669157+08:00"
        },
        {
          "id": 126,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "拍照",
          "desc": "<h3>请求说明： 拍照</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=grabimage</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"filepath\": \"\",    // 默认：空字符串；\"\"：采集摄像头图像，返回图像uuid；base64：采集摄像头图像，返回base64\r\n    \"rotate\": \"\",      // 图像旋转角度，90的整数倍，默认：\"0\"\r\n    \"cutpage\": \"\",     // 纠偏（主头有效），参数：0:不纠偏；1:纠偏\r\n    \"camidx\": \"\",      // 摄像头索引，参数：0:主头；1:副头\r\n    \"ColorMode\": \"\",  // 色彩模式，图片保存本地时调用。0:彩色模式；1:灰色模式; 2:黑白模式; 3:白纸印章；4:去除背景\r\n    \"quality\": \"\",     // 图片质量，图片保存本地调用。0:默认质量；1:高质量；2:较高质量；3:中质量；4:较低质量；5:低质量\r\n    \"bAutoAdjust\":\"\",  //是否自动摆正： 0：不摆正 1：摆正\r\n    \"watermark\": {\r\n        \"pos\": \"\",           // 水印在图像中的位置，0:左上；1:右上；2:左下；3:右下；4:中间\r\n        \"content\": \"\",       // 水印内容，必须utf-8编码，当水印内容为空，将当前时间作为水印\r\n        \"transparency\": \"\",  // 透明度，0~255,0:完全透明；255:不透明\r\n        \"fontsize\": \"\",      // 字体大小，默认：32\r\n        \"font\": \"\",          // 字体\r\n        \"color\": \"\"          // 水印颜色，colorname\r\n    }\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",         // 0:成功；1:失败\r\n    \"message\": \"\",       // code=1，返回失败原因\r\n    \"uuid\": \"\",          // filepath为空，uuid返回图像唯一标示；filepath为保存地址，uuid为空。（filepath非base64，才返回该key）\r\n    \"filepath\": \"\",      // 返回图像保存的路径（filepath非base64，才返回该key）\r\n    \"photoBase64\": \"\"    // 返回图片的base64数据（filepath为base64，才返回该key）\r\n}\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-06-19T20:20:12.923248+08:00",
          "update_at": "2021-08-11T18:04:54.935523+08:00"
        },
        {
          "id": 127,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "展平拍照",
          "desc": "<h3>请求说明： 展平拍照</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=autoflat</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"filepath\": \"\",                           // 图片保存位置\r\n    \"rotate\": \"0\",                            // 旋转角度\r\n    \"camidx\": \"0\",                            // 摄像头\r\n    \"cutpage\": \"0\",                           // \r\n    \"autoflat\": {\r\n        \"flat\": \"1\",\r\n        \"leftfilepath\": \"D://testleft.jpg\",\r\n        \"rightfilepath\": \"D://testright.jpg\",\r\n        \"removefinger\": \"1\",\r\n        \"doublepage\": \"1\"\r\n    }\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"uuid\": \"973D7B1F-E42A-4AAB-86CA-52219FEE3919\",\r\n    \"filepath\": \"file(path + name)\",\r\n    \"photoBase64\": \"base64数据\",\r\n    \"leftuuid\": \"\",\r\n    \"leftfilepath\": \"D://testleft.jpg\",\r\n    \"leftphotoBase64\": \"base64数据\",\r\n    \"rightuuid\": \"\",\r\n    \"rightfilepath\": \"D://testright.jpg\",\r\n    \"rightphotoBase64\": \"base64数据\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-06-19T20:22:59.919736+08:00",
          "update_at": "2021-08-11T18:05:42.745929+08:00"
        },
        {
          "id": 128,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "开启自动拍照",
          "desc": "<h3>请求说明： 开启自动拍照</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=movedetec</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"movedetecflag\": \"1\",           // 开启自动拍照\r\n    \"listpath\": \"D://httpcamera\",   // 图片保存目录\r\n    \"filepath\": \"LT\"                // 图片名称前缀\r\n}\r\n</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"data\": \"拍摄图片的base64数据\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-06-19T20:31:51.144724+08:00",
          "update_at": "2021-08-11T18:06:17.494755+08:00"
        },
        {
          "id": 129,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "关闭自动拍照",
          "desc": "<h3>请求说明： 关闭自动拍照</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=movedetec</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"movedetecflag\": \"0\"\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-06-19T20:32:55.392041+08:00",
          "update_at": "2021-08-11T18:07:05.134571+08:00"
        },
        {
          "id": 130,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "添加图片到PDF队列中",
          "desc": "<h3>请求说明： 添加图片到PDF队列中</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/pdf=addimage</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"ImagePath\": \"\",    // 图片绝对路径\r\n    \"ImageBase64\": \"\"   // 图片base64数据\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
          "index": 6,
          "create_at": "2021-06-19T20:33:49.943193+08:00",
          "update_at": "2021-08-11T18:07:45.726089+08:00"
        },
        {
          "id": 131,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "生成PDF文件",
          "desc": "<h3>请求说明： 生成PDF文件</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/pdf=save</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"PdfPath\": \"文件名称（路径 + 名称）\"\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"data\": \"文件base64数据\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 7,
          "create_at": "2021-06-19T20:35:32.384799+08:00",
          "update_at": "2021-08-11T18:08:32.565106+08:00"
        },
        {
          "id": 132,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "条码识别",
          "desc": "<h3>请求说明： 条码识别</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/barcode=get</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"time\": \"20\"\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"data\": [{\"barcodedata\": \"6921553626611\"}, {\"barcodedata\": \"6921553626605\"}]    // 返回array\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 8,
          "create_at": "2021-06-19T20:37:32.702302+08:00",
          "update_at": "2021-08-11T18:09:29.535581+08:00"
        },
        {
          "id": 135,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "开始录制视频",
          "desc": "<h3>请求说明： 开始录制视频</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=record</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"action\": \"start\",\r\n    \"parameter\": {\r\n        \"camidx\": \"1\",        // 摄像头索引，默认为：1\r\n        \"width\": \"640\",       // 视频宽度，默认：640\r\n        \"height\": \"480\",      // 视频高度，默认：480\r\n        \"audio\": \"\",          // 音频设备名，为空：系统第一个音频设备\r\n        \"framerate\": \"10\",    // 视频帧率，默认：10\r\n        \"filepath\": \"\",       // 文件保存地址，为空：生成临时文件\r\n        \"bit_rate\": \"400000\", // 视频码率，默认：400000\r\n        \"watermark\": {        // 有该参数，将在视频中添加水印\r\n            \"pos\": \"\",            // 水印在图像中的位置，0:左上；1:右上；2:左下；3:右下；4:中间\r\n            \"content\": \"\",        // 水印内容，必须 utf-8编码\r\n            \"transparency\": \"\",   // 透明度0~255，0:透明；255:不透明\r\n            \"fontsize\": \"\",       // 字体大小，默认：32\r\n            \"font\": \"\",           // 字体\r\n            \"color\": \"\"           // 水印颜色，colorname\r\n        }\r\n    }\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"filepath\": \"文件存储地址\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 9,
          "create_at": "2021-06-19T20:41:58.359405+08:00",
          "update_at": "2021-08-11T18:11:01.920991+08:00"
        },
        {
          "id": 136,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "停止录制视频",
          "desc": "<h3>请求说明： 停止录制视频</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=record</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"action\": \"stop\"\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"time\": \"录像时长\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 10,
          "create_at": "2021-06-19T20:42:50.887364+08:00",
          "update_at": "2021-08-11T18:11:41.432495+08:00"
        },
        {
          "id": 137,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "获取音频设备列表",
          "desc": "<h3>请求说明： 获取音频设备列表</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=record</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"action\": \"audio\"\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"audio\": [\r\n        \"麦克风阵列 (USB PnP Audio Device)\",\r\n        \"麦克风 (Realtek High Definition Au\",\r\n        \"麦克风 (S1020B)\"\r\n    ]\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 11,
          "create_at": "2021-06-19T20:43:47.744121+08:00",
          "update_at": "2021-08-11T18:12:58.367241+08:00"
        },
        {
          "id": 138,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "获取录制视频的状态",
          "desc": "<h3>请求说明： 获取录制视频的状态</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=record</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"action\": \"status\"\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"status\": \"101\",  // 设备状态，100:空闲，101:录像中，102:设备错误\r\n    \"time\": \"当前录像时长\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 12,
          "create_at": "2021-06-19T20:44:50.892106+08:00",
          "update_at": "2021-08-11T18:13:34.573683+08:00"
        },
        {
          "id": 140,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "A3A4自动切换(S1840专用)",
          "desc": "<h3>请求说明： A3A4自动切换(S1840专用)</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/device=a3a4switch</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"switchflag\": \"1\",  // 0:关闭自动切换；1:开启自动切换\r\n    \"a3size\": \"0.5\",    // 切换到A3幅面的阈值\r\n    \"a4size\": \"0.9\"     // 切换到A4幅面的阈值\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 14,
          "create_at": "2021-06-19T20:46:42.160179+08:00",
          "update_at": "2021-08-11T18:14:09.376660+08:00"
        },
        {
          "id": 141,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "旋转视频画面",
          "desc": "<h3>请求说明： 旋转视频画面</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/video=rotate</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"camidx\": \"0\",   // 摄像头，0:主头；1:副头\r\n    \"rotate\": \"90\"   // 角度，参数：90、180、270\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 15,
          "create_at": "2021-06-19T20:48:23.213429+08:00",
          "update_at": "2021-08-11T18:14:48.182963+08:00"
        },
        {
          "id": 143,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "获取指纹",
          "desc": "<h3>请求说明： 获取指纹</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/biokey=get</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"time\": \"20\"\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"data\": \"指纹图片base64数据\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 16,
          "create_at": "2021-06-19T20:50:15.736868+08:00",
          "update_at": "2021-08-11T18:15:31.205391+08:00"
        },
        {
          "id": 507,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "弹出签名窗口:GW500A & GW1000A",
          "desc": "<h3>请求说明： 弹出签名窗口:GW500A &amp; GW1000A</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/serialport=sign</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"pos\": {\r\n        \"top\": \"250\",\r\n        \"left\": \"280\",\r\n        \"width\": \"600\",\r\n        \"height\": \"250\"\r\n    },\r\n    \"remark\": \"开始签名\"\r\n}</code></pre>\r\n\r\n<p>返回参数：</p>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",           // 0:成功\r\n    \"message\": \"ok\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 17,
          "create_at": "2021-06-30T18:06:24.790074+08:00",
          "update_at": "2021-08-11T18:16:25.753485+08:00"
        },
        {
          "id": 508,
          "productname": "WebCamera",
          "functionname": "高拍仪",
          "name": "获取签名图片",
          "desc": "<h3>请求说明： 获取签名图片</h3>\r\n\r\n<h3>请求地址： http://127.0.0.1:38088/pendisplay=getsigndata</h3>\r\n\r\n<h3>请求方式： POST</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>请求参数： 无</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>返回参数 - 成功：</h3>\r\n\r\n<pre>\r\n<code>{\r\n    \"code\": \"0\",\r\n    \"message\": \"ok\",\r\n    \"remark\": \"开始签名\",\r\n    \"data\": \"文件base64数据\"\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 18,
          "create_at": "2021-06-30T18:20:48.283508+08:00",
          "update_at": "2021-08-11T18:17:06.191704+08:00"
        }
      ]
    },
    {
      "id": 51,
      "results": [
        {
          "id": 519,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "打开视频",
          "desc": "<pre>\r\n<code>Function:       BOOL StartPreview(int index);\r\nDescription:    打开视频\r\nInput:          index,0:主头；1:副头\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>ocx：</p>\r\n\r\n<pre>\r\n<code>&lt;OBJECT classid=\"clsid:A4B4E9B5-78E6-4CE3-B8A1-4B36237943F8\" id=\"ocxstreamimage\" name=\"showVideoOcx\"&gt;&lt;/OBJECT&gt;\r\n&lt;OBJECT classid=\"clsid:A4B4E9B5-78E6-4CE3-B8A1-4B36237943F8\" id=\"ocxstreamimage1\" name=\"showVideoOcx1\"&gt;&lt;/OBJECT&gt;</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 0,
          "create_at": "2021-07-07T16:36:19.739805+08:00",
          "update_at": "2021-08-11T20:04:29.007223+08:00"
        },
        {
          "id": 522,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "关闭摄像头",
          "desc": "<pre>\r\n<code>Function:       StopPreview(int camidx);\r\nDescription:    关闭摄像头\r\nInput:          camidx，摄像头索引，0：主头；1：副头\r\nReturn:         返回结果Bool，TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 2,
          "create_at": "2021-07-08T14:54:16.041146+08:00",
          "update_at": "2021-08-11T20:04:42.925414+08:00"
        },
        {
          "id": 523,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "获取分辨率",
          "desc": "<pre>\r\n<code>Function:       GetResolution(int camidx, int mode);\r\nDescription:    获取分辨率\r\nInput:          camidx，摄像头索引，0：主头；1：副头\r\n                mode，视频模式，0：YUY2；1：MJPG\r\nReturn:         成功：\"{\\\"code\\\":\\\"0\\\",\r\n                       \\\"message\\\":\\\"ok\\\",\r\n                       \\\"data\\\":\\\"3264*2448|2592*1944|2048*1536|1920*1080|1600*1200\r\n                               |1280*960|1280*720|1024*768|800*600|640*480\\\"}\"\r\n                失败：\"{\\\"code\\\":\\\"1\\\",\r\n                       \\\"message\\\":\\\"failed\\\",\r\n                       \\\"data\\\":\\\"\\\"}\"\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 3,
          "create_at": "2021-07-08T14:55:53.373512+08:00",
          "update_at": "2021-08-11T20:04:55.390061+08:00"
        },
        {
          "id": 524,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "旋转",
          "desc": "<pre>\r\n<code>Function:       SetVideoRotate(int rotate);\r\nDescription:    旋转\r\nInput:          rotate，旋转，90：左转；270：右转\r\nReturn:         成功：\"{\\\"code\\\":\\\"0\\\", \\\"message\\\":\\\"ok\\\"}\"\r\n                失败：\"{\\\"code\\\":\\\"1\\\", \\\"message\\\":\\\"failed\\\"\\\"}\"\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 4,
          "create_at": "2021-07-08T14:56:38.261975+08:00",
          "update_at": "2021-08-11T20:05:10.197163+08:00"
        },
        {
          "id": 525,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "放大缩小",
          "desc": "<pre>\r\n<code>Function:       ZoomInOut(int camidx, int scaling);\r\nDescription:    放大缩小\r\nInput:          camidx，摄像头索引,0:主头；1:副头\r\n                scaling，缩放比例，0-9,0：正常显示，9：最大显示\r\nReturn:         成功：\"{\\\"code\\\":\\\"0\\\", \\\"message\\\":\\\"ok\\\",\\\"data\\\":\\\"图像放大成功\\\"}\"\r\n                失败：\"{\\\"code\\\":\\\"1\\\", \\\"message\\\":\\\"failed\\\",\\\"data\\\":\\\"图像缩小成功\\\"}\"\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 5,
          "create_at": "2021-07-08T14:57:03.915952+08:00",
          "update_at": "2021-08-11T20:05:22.629788+08:00"
        },
        {
          "id": 526,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "设置视频模式及分辨率",
          "desc": "<pre>\r\n<code>Function:       SetVideoResolution(int mode, int width, int height);\r\nDescription:    设置视频模式及分辨率\r\nInput:          mode，视频模式，0：YUY2；1：MJPG\r\n                width，分辨率宽\r\n                height，分辨率高\r\nReturn:        成功：\"{\\\"code\\\":\\\"0\\\", \\\"message\\\":\\\"ok\\\",\\\"data\\\":\\\"设置分辨率成功\\\"}\"\r\n               失败：\"{\\\"code\\\":\\\"1\\\", \\\"message\\\":\\\"failed\\\",\\\"data\\\":\\\"设置分辨率失败\\\"}\"\r\nOthers:         需要先关闭摄像头，设置成功后在打开摄像头，否则无效。</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 6,
          "create_at": "2021-07-08T14:57:31.862619+08:00",
          "update_at": "2021-08-11T20:05:34.989704+08:00"
        },
        {
          "id": 527,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "纠偏",
          "desc": "<pre>\r\n<code>Function:       DeskewImageIE(int camidx, int cutpage);\r\nDescription:    纠偏\r\nInput:          camidx，摄像头索引，0：主头；1：副头\r\n                cutpage，是否纠偏，0：不纠偏；1：纠偏\r\nReturn:         成功:主头开启纠偏;主头关闭纠偏;副开开启纠偏;副开关闭纠偏;\r\n                失败：纠偏失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 7,
          "create_at": "2021-07-08T14:58:05.094459+08:00",
          "update_at": "2021-08-11T20:05:48.029437+08:00"
        },
        {
          "id": 528,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "设置曝光值",
          "desc": "<pre>\r\n<code>Function:       SetDeviceExposurValIE(int camidx, int value, int isauto);\r\nDescription:    设置曝光值\r\nInput:          camidx，摄像头索引，0：主头；1：副头\r\n                value，曝光值，步长为1\r\n                isauto,是否开启自动曝光，0：关闭；1：开启\r\nReturn:         成功：设置曝光成功\r\n                失败：设置曝光失败\r\nOthers:         开启自动曝光后，设置的曝光值无效</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 8,
          "create_at": "2021-07-08T14:58:42.005780+08:00",
          "update_at": "2021-08-11T20:06:01.262426+08:00"
        },
        {
          "id": 529,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "拍照",
          "desc": "<pre>\r\n<code>Function:       GrabImage(  LPCTSTR filePath,\r\n                            LONG nRotate,\r\n                            VARIANT_BOOL Deskew,\r\n                            LONG nQuality,\r\n                            LONG nColor,\r\n                            VARIANT_BOOL bAutoAdjust,\r\n                            LONG nPos,\r\n                            LPCTSTR strText,\r\n                            LONG nTransparency,\r\n                            LONG nFontsize,\r\n                            LPCTSTR strFont,\r\n                            LPCTSTR strColor);\r\nDescription:    拍照获取base64数据\r\nInput:          filepath：图片保存地址。 1）为空时，生成base64数据，生成图片到自动生成目录(在返回值中返回)\r\n                                           2) 为路径时，列：\"D:\\\\GrabImageIE.jpg\"，在指定的完整路径下生成图片。\r\n                                           3）字段 \"base64\"，返回base64数据，不保存图片.\r\n                    nRotate：顺时针旋转角度：90，180，270，对应旋转度数，其他值无效。\r\n                    Deskew：是否纠偏拍照。0:不纠偏 1：纠偏\r\n                    nQuality：图片质量，图片质量 0：默认质量 1:高质量 2：较高质量 3：中等质量 4：较差质量 5：差质量\r\n                    nColor：图片颜色：0：彩色 1：灰色 2：黑白 3：白纸印章 4：去除背景色\r\n                    bAutoAdjust：是否自动摆正： 0：不摆正 1：摆正\r\n                    nPos：水印在图片的位置：0：左上 1：右上 2：左下 3：右下 4：居中\r\n                    strText：水印文本内容，空时显示当前拍照时间\r\n                    nTransparency：字体透明度0-255,为0时不显示，**不添加水印时设置为0**。\r\n                    nFontsize：字体大小默认32.\r\n                    strFont：字体格式默认微软雅黑\r\n                    strColor：字体颜色：white,cyan,red,magenta,green,yellow,blue,gray\r\nReturn:         成功：\"{\\\"code\\\":\\\"0\\\", \\\"message\\\":\\\"ok\\\", \\\"uuid\\\":\\\"%s\\\", \\\"filepath\\\":\\\"%s\\\", \\\"photoBase64\\\":\\\"%s\\\"}\"\r\n                    失败：\"{\\\"code\\\":\\\"1\\\", \\\"message\\\":\\\"failed\\\", \\\"uuid\\\":\\\"\\\", \\\"filepath\\\":\\\"\\\", \\\"photoBase64\\\":\\\"\\\"}\"\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 9,
          "create_at": "2021-07-08T14:59:24.352503+08:00",
          "update_at": "2021-08-11T20:06:19.735081+08:00"
        },
        {
          "id": 530,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "图片合成",
          "desc": "<pre>\r\n<code>Function:       ComposeImageIE(string base640, string base641);\r\nDescription:    图片合成\r\nInput:          base640，第一张图片的base64数据\r\n                base641，第二张图片的base64数据\r\nReturn:         返回图片base64数据\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 10,
          "create_at": "2021-07-08T15:00:08.025611+08:00",
          "update_at": "2021-08-11T20:06:33.815213+08:00"
        },
        {
          "id": 531,
          "productname": "WebCamera",
          "functionname": "IE  |  ocx",
          "name": "人证比对",
          "desc": "<pre>\r\n<code>Function:       CameraFaceComparsionIE(string base64);\r\nDescription:    人证比对\r\nInput:          base64，身份证头像的base64数据\r\nReturn:         返回比对值\r\nOthers:         调用此接口时，会自动获取到人像图片，使用传入的身份证头像和人像做比对，返回比对值。一般比对值大于50可以认为是比对通过。配合使用 GetCameraFaceComparsionIEBase64() 可以获取到比对时人像的base64数据。</code></pre>\r\n\r\n<p>&nbsp;</p>",
          "index": 11,
          "create_at": "2021-07-08T15:00:29.925176+08:00",
          "update_at": "2021-08-11T20:06:47.565448+08:00"
        }
      ]
    }
  ]
}