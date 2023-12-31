(function () {
    // 描述一个对象的类型
    type myType = {
        name: string;
        age: number;
        [propName: string]: any;
    };

    const obj1: myType = {
        name: "sss",
        age: 111,
    };

    /**
     * 接口用来定义一个类结构，用来定义一个类中应该包含安歇属性和方法。
     *  同时接口也可以当成类型声明去使用。
     */
    interface myInterface {
        name: string;
        age: number;
    }
    interface myInterface {
        gender: string;
    }

    const obj2: myInterface = {
        name: "sss",
        age: 111,
        gender: "男",
    };

    /**
     * 接口可以在定义类的时候去限制类的结构。
     *  接口中的所有的属性都不能有实际的值，只负责定义，不考虑实现。
     *  接口中所有的方法都是抽象方法。
     */
    interface myInterface2 {
        name: string;
        sayHello(): void;
    }
    /**
     * 定义类时，可以使类去实现一个接口。
     *      实现接口就是使类满足接口的要求。
     */
    class MyClass implements myInterface2 {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(): void {
            console.log("大家好~~~");
        }
    }
})();
