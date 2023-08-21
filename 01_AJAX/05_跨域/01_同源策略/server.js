// 1.引入express
const express = require("express");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
app.get("/home", (req, res) => {
    // 响应一个页面
    res.sendFile(__dirname + "/index.html");
});
app.get("/data", (req, res) => {
    res.send("用户数据");
});

// 4.监听端口启动服务
app.listen(9000, () => {
    console.log("服务已经启动， 9000端口监听中...");
});
