
## rem-vw-layout

本项目为移动端 REM布局 与 Viewport (VW) 布局的实例运用

提供三个布局方案

1. **REM 布局** 

[http://localhost:4321/rem/index.html](http://localhost:4321/rem/index.html)

使用js动态设置html的font-size，css使用rem单位，文本大小可选择使用px，js设置viewport的scale以支持高清设备的1px，可设置页面最大最小宽度

2. **VW 布局**

[http://localhost:4321/vw/index.html](http://localhost:4321/vw/index.html)

css使用vw单位，文本大小可选择使用px，使用transform以支持高清设备的边框1px（包括圆角），可设置容器固定纵横比，不可设置页面最大最小宽度

3. **REM + VW 布局**

[http://localhost:4321/vw-rem/index.html](http://localhost:4321/vw-rem/index.html)

css使用rem单位，文本大小可选择使用px，使用transform以支持高清设备的边框1px（包括圆角），可设置容器固定纵横比，可设置页面最大最小宽度


## 解析说明 todo

[解析说明](https://www.cnblogs.com/imwtr/p/9576546.html)


## 使用
1. `cd rem-vw-layout` 进入项目
2. `node server` 启动Node服务
3. 访问上述四个页面


## DEMO todo
![REM](./message.gif)
![VW](./message-ssr.gif)
![REM + VW](./home.gif)

