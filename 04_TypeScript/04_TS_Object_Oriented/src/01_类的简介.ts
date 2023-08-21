// 使用class关键字来定义一个类
/**
 * 对象中主要包含了两个部分：
 *  属性
 *  方法
 */
class Person {
    /**
     * 直接定义的属性是实例属性，需要通过对象的实例去访问：
     * 使用 readonly 关键字可以定义一个属性为只读属性
     * 使用 static 关键字开头的属性是静态属性（类属性），可以直接通过类访问
     */
    // 定义实例属性
    // readonly name: string = "孙悟空";
    name = "孙悟空";

    // 在属性前使用 static 关键字可以定义类属性（静态属性）
    // static readonly age: number = 18;
    age = 18;

    // 定义方法
    /**
     * 如果方法以 static 开头则方法就是类方法，可以通过类直接调用
     */
    sayHello() {
        console.log("Hello 大家好！");
    }
}
const person = new Person();
console.log(person);
// console.log(Person.age);
person.sayHello();
