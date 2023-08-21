(function () {
    // 定义一个表示人的类
    class Person {
        // TS可以在属性前添加属性的修饰符
        /**
         * public 公共的
         * private 私有的属性
         *      - 通过在类中添加方法使得私有属性可以被外部访问。
         * protected 受包含的属性，只能在当前类和当前类的子类中使用。
         */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        // 定义方法，用来获取name属性
        /*getName() {
            return this._name;
        }

        // 定义方法，用来设置name属性
        setName(value: string) {
            this._name = value;
        }

        getAge() {
            return this._age;
        }

        setAge(value: number) {
            if (value >= 0) {
                this._age = value;
            }
        } */

        // TS中设置getter方法的方式
        get name() {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get age() {
            return this._age;
        }

        set age(value: number) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }

    const person = new Person("孙悟空", 18);
    console.log(person);

    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改，
     *  属性可以任意被修改将会导致对象中的数据变得非常不安全。
     */
    // console.log(person.getName());
    // person.setAge(-33);

    person.name = "猪八戒";
    person.age = -10;
    console.log(person);

    class A {
        protected num: number;

        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A {
        test() {
            console.log(this.num);
        }
    }

    const b = new B(123);
    // b.num = 10; // 属性“num”受保护，只能在类“A”及其子类中访问

    /* class C {
        name: string;
        age: number;

        // 可以直接将属性定义在构造函数中
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    } */

    class C {
        // 可以直接将属性定义在构造函数中
        constructor(public name: string, public age: number) {}
    }

    const c = new C("xxx", 111);
    console.log(c);
})();
