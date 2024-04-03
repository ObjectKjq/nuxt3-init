# Nuxt.js 项目模板
```shell
# 拉取原版项目模板
git clone -b v3 https://github.com/nuxt/starter.git my-project

# 拉取项目模板
git clone https://github.com/ObjectKjq/nuxt3-init.git nuxt-init
```

## 创建.env文件，添加mongodb数据库配置
MONGO_CONNECTION_STRING="mongodb:ip:port"
MONGO_DB="数据库名称"

# 安装依赖
- cd my-project
- npm install

# 启动开发环境
npm run dev

# 目录结构
- public/ # 静态资源
- pages/ # 页面
- layouts/ # 布局
- components/ # 组件
- server/ # 服务端渲染

# mongodb数据库模型
```json
wish: {
    "_id":"ObjectId",
    "title":"string",
    "content":"string",
    "createTime":"date",
    "updateTime":"date",
    "isDelete":"boolean"
}
```
