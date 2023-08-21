// 1.引入express
const express = require("express");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
app.get("/server", (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应体
    res.send("HELLO AJAX");
});

app.all("/server", (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应头，设置允许自定义允许请求头
    res.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应体
    res.send("HELLO AJAX");
});

app.all("/json-server", (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应头，设置允许自定义允许请求头
    res.setHeader("Access-Control-Allow-Headers", "*");
    // 响应一个数据
    const data = {
        name: "atguigu",
    };
    const str = JSON.stringify(data);
    // 设置响应体
    res.send(str);
});

// 针对 IE缓存
app.all("/ie", (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应体
    res.send("HELLO IE");
});

// 针对 IE缓存
app.all("/delay", (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应头，设置允许自定义允许请求头
    res.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应体
    setTimeout(() => {
        res.send("延时响应");
    }, 3000);
});

// jQuery 服务
app.all("/jquery-server", (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应头，设置允许自定义允许请求头
    res.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应体
    // res.send("Hello jQuery AJAX");
    const data = {
        name: "尚硅谷",
    };
    res.send(JSON.stringify(data));
});

// axios 服务
app.all("/axios-server", (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应头，设置允许自定义允许请求头
    res.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应体
    // res.send("Hello jQuery AJAX");
    const data = {
        name: "尚硅谷",
    };
    res.send(JSON.stringify(data));
});

// fetch 服务
app.all("/fetch-server", (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应头，设置允许自定义允许请求头
    res.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应体
    // res.send("Hello fetch AJAX");
    const data = {
        name: "尚硅谷",
    };
    res.send(JSON.stringify(data));
});

// jsonp 服务
app.all("/jsonp-server", (req, res) => {
    // 设置响应体
    // res.send("console.log('Hello jsonp AJAX');");

    const data = {
        name: "尚硅谷atguigu",
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    res.end(`callback(${str});`);
});

// jsonp 服务
app.all("/check-username", (req, res) => {
    const data = {
        exist: 1,
        msg: "用户名已经存在",
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);

    // 返回结果
    res.end(`handle(${str});`);
});

// jsonp 服务
app.all("/jquery-jsonp-server", (req, res) => {
    const data = {
        name: "尚硅谷",
        city: ["背景", "上海", "深圳"],
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);

    // 接收 callback 参数
    let cb = request.query.callback;
    console.log("cb=" + cb);

    // 返回结果
    res.end(`${cb}(${str});`);
});

// CORS
app.all("/cors-server", (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应头，设置允许自定义允许请求头
    res.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应头，设置允许方法
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.send("hello CORS");
});

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动， 8000端口监听中...");
});
