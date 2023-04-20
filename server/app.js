const express = require("express");
const { join } = require("path");
console.log("app");
const { router } = require("./router/index");

const port = 8000;
const app = express();

app.set("view engine", "ejs");

//配置服务器映射到静态文件夹Public
app.use(express.static(join(__dirname, "public")));

app.use("/", router);

//服务监听
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
//利用路由回调动态渲染
app.get("/dynamicRender", (req, res) => {
  const title = "Server Side Render";
  const lists = [
    {
      id: 0,
      name: "Server",
    },
    {
      id: 1,
      name: "Side",
    },
    {
      id: 2,
      name: "Render",
    },
  ];
  res.end(
    `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="./css/static.css">
          </head>
        <body>
          <div class="title">
           ${title}
          </div>
          <div class="list">
            <ul id="J_list">
            ${lists
      .map(
        (item) => `<li>
                    <span>${item.id}</span>
                    <p>${item.name}</p>
                    </li>`
      )
      .join("")}
            </ul>
          </div>
        </body>
     
        </html>`
  );
});

//利用模版引擎动态渲染
app.get("/ejs", (req, res) => {
  const title = "EJS Server Side Render";
  const lists = [
    {
      id: 0,
      name: "EJS Server",
    },
    {
      id: 1,
      name: "Side",
    },
    {
      id: 2,
      name: "Render",
    },
  ];

  res.render("index", {
    title,
    lists,
  });
});
