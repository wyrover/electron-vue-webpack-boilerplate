## 开发
> git clone git@git.eformax.com:fx/global-trading-fx-client.git && cd && npm i 

> shell 1 运行  npm run dev-server

> shell 2 运行  npm run dev

## 架构
* electron + vue

## 目录结构
    ├── src                开发源码目录
    │   ├── components     ui组件
    │   ├── routes         每个文件对应一个页面  可以调用ui组件组成一个route
    │   ├── services       服务调用封装  可以在ui组件里面调用服务从服务器获取数据
    │   ├── routes         每个文件对应一个页面  可以调用ui组件组成一个route
    │   ├── vendor         其他类库
    │   ├── app.html       页面模板
    │   ├── app.js         入口文件
    │   └── 
    ├── test               单元测试目录
    ├── release            打包目录 由命令生成
    ├── config             配置  每个环境一个配置文件
    ├── node_modules       开发依赖的库
    ├── resources          打包成app时用到的资源  图标等 
    │   ├── linux
    │   ├── osx
    │   └── windows
    ├── webpack-config     webpack配置目录，每个环境一个配置文件
    ├── release            打包目录 由命令生成
    ├── build              编译目录 由开发源码目录经webpack编译之后生成
    ├── pack.js            打包脚本
    ├── package.json    
    ├── main.js            客户端主进程入口文件   
    └── server.js          开发环境hot module replacement server

## 构建命令
* npm run dev-server       启动开发环境 hot module replacement server
* npm run dev              启动开发环境客户端
* npm start                启动 production 环境客户端 
* npm build                编译 production 环境代码
* npm run pack-testing     打包当前系统测试客户端
* npm run pack-testing-all 打包linux、oxs、windows系统的测试客户端
* npm run release          打包当前系统客户端
* npm run release-all      打包linux、oxs、windows系统的客户端
* npm run lint             检查js语法
* npm run test             运行单元测试
* npm run test-watch       监听单元测试(单元测试代码变动自动运行)

## 说明 
* node v4.2.4 LTS (4.xxx.xxx 是长期支持版本，建议使用)
* npm v2.14.12 (npm2比npm3快，建议使用)
* 安装npm依赖 如果不是要打包到客户端里面的包，都--save-dev
* app 打包的时候 修改package.json文件里面的version
* 在linux/osx系统上打包windows系统的软件包时需要先安装wine

## 代码规范
* 推荐使用ES2015语法规范
* ES5和ES6不要混合使用
* vue 组件以 .vue作为后缀名, 编码顺序自上而下 style template  script
* vue 文件缩进2个空格，安装editorconfig插件即可，配置文件在项目根目录已经写好，轻易不要改动

  
## TODO 
* 单元测试暂时还没有完善


