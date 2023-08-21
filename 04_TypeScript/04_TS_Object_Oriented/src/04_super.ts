(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log("动物的声音！");
        }
    }
    class Dog extends Animal {
        age: number;

        constructor(name: string, age: number) {
            // 如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数调用
            super(name);
            this.age = age;
        }

        sayHello(): void {
            // 在类的方法中 super 就表示当前类的父类
            super.sayHello();
        }
    }

    const dog = new Dog("小黑", 5);
    dog.sayHello();
})();
