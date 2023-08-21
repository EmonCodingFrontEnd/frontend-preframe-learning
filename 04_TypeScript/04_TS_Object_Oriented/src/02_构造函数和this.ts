class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        /**
         * 在实例方法中，this就表示当前的实例
         * 在构造函数中当前对象就是当前新创建的那个对象。
         * 可以通过this向新创建的对象添加属性。
         */
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在方法中可用通过 this 来表示当前调用方法的对象
        console.log(this.name);
    }
}
const dog1 = new Dog("小黑", 18);
const dog2 = new Dog("小白", 18);
console.log(dog1);
dog1.bark();
console.log(dog2);
