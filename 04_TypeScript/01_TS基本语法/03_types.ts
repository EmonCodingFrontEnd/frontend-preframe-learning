// 也可以直接使用字面量进行类型声明
let a: 10;
a = 10;
// a = 11; // 错误

// 可以使用 | 来连接多个类型（联合）
let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | string;
c = true;
c = "hello";

// any 表示的是任意类型，一个变量设置类ex为any后相当于对该变量关闭了TS的类型检测
// let d: any; // 【不建议】
let d; // 等效于 let d: any; // 【不建议】
d = 10;
d = "123";
d = true;

// unknown 表示未知类型的值
let e: unknown;
e = 10;
e = "hello";
e = true;

let s: string;
// d的类型是any，它可以赋值给任意变量
s = d;
// e的类型是unknown不能分配给其他指定类型的变量；unknows是类型安全的any
// s = e; //
// unknown类型的变量，不能直接赋值给其他变量，但经过类型判断后可以赋值
if (typeof e === "string") {
    s = e;
}

// 类型断言，可以用来告诉解析器变量的实际类型
s = e as string;
s = <string>e;

// void用来表示空，表示没有返回值的函数
function fn(num: number): void {
    return undefined;
}
// never表示永远没有返回值，特指：异常
function fn2(num: number): never {
    throw new Error("报错了！");
}
