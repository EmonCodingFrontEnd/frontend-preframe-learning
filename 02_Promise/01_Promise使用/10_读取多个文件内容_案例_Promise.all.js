// 1、导入模块
const fs = require("fs");
const util = require("util");

// 2、调用方法
const myReadFile = util.promisify(fs.readFile);
// 3、读取文件
const one = myReadFile("./resource/1.txt");
const two = myReadFile("./resource/2.txt");
const three = myReadFile("./resource/3.txt");
const result = Promise.all([one, two, three]);
result.then(
    (value) => {
        console.log(value.join("<->"));
    },
    (reason) => {
        console.log(reason);
    }
);
