// 1、导入模块
const fs = require("fs");
// 2、封装一个函数
function readFileFun(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            // 判断
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// 3、调用
readFileFun("./resource/1.txt").then(
    (value) => {
        console.log(value.toString());
    },
    (reason) => {
        console.log(reason);
    }
);
