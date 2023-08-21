(function () {
    // 定义一个Animal类
    class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("动物的声音！");
        }
    }

    /**
     * Dog 继承 Animal 后，
     *  - 此时，Animal被称为父类，Dog被称为子类
     *  - 使用继承后，子类将会拥有父类的所有方法和属性
     *  - 通过继承可以将多个类中共有的代码写在一个父类中，
     *      - 这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法；
     *      - 如果希望在子类中添加一些父类中没有的属性或方法直接添加即可。
     *  - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖父类的同名方法
     *      - 这种子类覆盖父类方法的形式，我们称之为重写/覆盖
     */
    // 定义一个表示狗的类
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑~~~`);
        }
    }

    // 定义一个表示猫的类
    class Cat extends Animal {
        sayHello() {
            console.log("喵喵喵！");
        }
    }

    const dog = new Dog("旺财", 5);
    console.log(dog);
    dog.sayHello();
    dog.run();

    const cat = new Cat("咪咪", 5);
    console.log(cat);
    cat.sayHello();
})();
