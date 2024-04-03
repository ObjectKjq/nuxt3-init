# Nuxt.js 项目模板
```shell
# 拉取项目模板
git clone -b v3 https://github.com/nuxt/starter.git my-project

# 安装依赖
cd my-project
npm install

# 启动开发环境
npm run dev

# 目录结构
public/ # 静态资源
server/ # 服务端渲染

# 数据模型
wish{
    _id:ObjectId,
    title:string,
    content:string,
    createTime:date,
    updateTime:date,
    isDelete:boolean
}
