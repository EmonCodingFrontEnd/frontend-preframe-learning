// 声明一个变量a，同时指定它的类型位number
let a: number;

// a的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello'; // 不能将类型“string”分配给类型“number”。

let b: string;
b = "hello";
// b=123; // 类型错误

// 声明变量并直接赋值
// let c: boolean = true;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行预测
let c = false;
c = true;
// c = 123; // 不能将类型“number”分配给类型“boolean”

// JS中的函数是不考虑参数的类型和个数的
function sum(a: number, b: number): number {
    return a + b;
}
let result = sum(123, 456);
