// 立即执行函数（IIFE）
// 好处：可以避免对外部的变量造成污染
(function (window) {
    function Promise(executor) {
        // 给Promise构造函数所产生的的实例化对象身上添加两个属性
        this.PromiseState = "pending";
        this.PromiseResult = undefined;

        /**
         * 函数中的this指向取决于函数的调用者，也就是说谁调用了这个函数，那么函数中的this就指向了谁。
         * 函数中this不光可以得到另一个函数中的this指向，还可以直接修改成想要的this指向。
         * 修改函数中的this指向有三种：call、apply、bind
         */

        // 定义resolve函数
        const _resolve = (value) => {
            if (this.PromiseState !== "pending") {
                return;
            }
            this.PromiseState = "fulfilled";
            this.PromiseResult = value;
        };

        // 定义reject函数
        const _reject = (reason) => {
            if (this.PromiseState !== "pending") {
                return;
            }
            this.PromiseState = "rejected";
            this.PromiseResult = reason;
        };

        try {
            executor(_resolve, _reject);
        } catch (error) {
            if (error instanceof Error) {
                this.PromiseState = "rejected";
                this.PromiseResult = error.message;
            } else {
                this.PromiseState = "rejected";
                this.PromiseResult = error;
            }
        }
    }
    window.Promise = Promise;
})(window);
