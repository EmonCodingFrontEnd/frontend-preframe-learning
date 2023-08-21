// 1、导入模块
const mongoose = require("mongoose");
// 2、创建Promise实例化对象
new Promise((resolve, reject) => {
    // 3、连接数据库
    mongoose.connect("mongodb://root:root123@repo.emon.vip:27017/admin");
    mongoose.connection.on("open", () => {
        // 连接成功的情况
        resolve();
    });
    mongoose.connection.on("error", () => {
        // 连接失败的情况
        reject();
    });
}).then(
    (value) => {
        console.log("连接成功");
        // 创建结构
        const noteSchema = new mongoose.Schema({
            title: String,
            content: String,
        });
        // 创建模型
        const nodeModel = mongoose.model("notes", noteSchema);

        // 读取操作
        nodeModel.find().then(
            (value) => {
                console.log(value);
            },
            (reason) => {
                console.log(reason);
            }
        );
    },
    (reason) => {
        console.log("连接失败");
    }
);
