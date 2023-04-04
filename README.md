# MVC
MVC model
### 服务端搭建

```bash
mkdir server
cd server

npm init -y

npm i express nodemon path
```

创建app.js

```javascript
const express = require("express");
const { join } = require("path");

const port = 8000;
const app = express();

//配置服务器映射到静态文件夹Public
app.use(express.static(join(__dirname, "public")));

//服务监听
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

```



### 路径、文件创建

```bash
cd server
mkdir public
cd public

touch static.html

mkdir css js
cd css
touch static.css

cd js 
touch static.js
```



### 启动

```
nodemon app.js

#访问http://localhost:8000/static.html
```

