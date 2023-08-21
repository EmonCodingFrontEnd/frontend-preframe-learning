// 1、导入模块
const fs = require("fs");
const { promisify } = require("util");

// 2、创建async函数
async function main() {
    // 读取文件
    const myReadFile = promisify(fs.readFile);
    try {
        const one = await myReadFile("./resource/1.txt");
        const two = await myReadFile("./resource/2.txt");
        const three = await myReadFile("./resource/3.txt");
        console.log([one, two, three].join("<->"));
    } catch (error) {
        console.log(error);
    }
}
main();
