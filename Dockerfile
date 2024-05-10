# 使用官方的Node.js的Docker镜像
FROM node:latest

# 设置工作目录
WORKDIR /usr/src/app

# 复制package.json文件
COPY package*.json ./

# 安装应用程序依赖
RUN npm install

# 复制应用程序代码
COPY . .

# 暴露应用程序监听的端口
EXPOSE ${PORT}

# 运行应用程序
CMD ["node", "app.js"]
