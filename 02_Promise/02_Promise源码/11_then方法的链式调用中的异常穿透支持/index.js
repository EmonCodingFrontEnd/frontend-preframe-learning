// 立即执行函数（IIFE）
// 好处：可以避免对外部的变量造成污染
(function (window) {
    function Promise(executor) {
        // 给Promise构造函数所产生的的实例化对象身上添加两个属性
        this.PromiseState = "pending";
        this.PromiseResult = undefined;
        this.callbackFn = [];

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
            // 执行当Promise实例化对象的状态为pending时，回调函数
            this.callbackFn.forEach((item) => {
                if (item.onfulfilled) {
                    item.onfulfilled();
                }
            });
        };

        // 定义reject函数
        const _reject = (reason) => {
            if (this.PromiseState !== "pending") {
                return;
            }
            this.PromiseState = "rejected";
            this.PromiseResult = reason;
            // 执行当Promise实例化对象的状态为pending时，回调函数
            this.callbackFn.forEach((item) => {
                if (item.onrejected) {
                    item.onrejected();
                }
            });
        };

        try {
            executor(_resolve, _reject);
        } catch (error) {
            if (this.PromiseState !== "pending") {
                return;
            }
            if (error instanceof Error) {
                this.PromiseState = "rejected";
                this.PromiseResult = error.message;
            } else {
                this.PromiseState = "rejected";
                this.PromiseResult = error;
            }
        }
    }

    // 借助于Object.assign方法使用一个对象和prototype对象进行合并
    Object.assign(Promise.prototype, {
        // ES6中方法的简写
        // 函数中的this指向取决于函数的调用者，也就是说谁调用了这个函数，那么函数中的this就指向了谁。
        then(onfulfilled, onrejected) {
            // 如果成功的回调函数并不是一个函数，则增加（补充）成功的回调函数默认值
            if (!(onfulfilled instanceof Function)) {
                onfulfilled = (value) => value;
            }
            // 如果失败的回调函数并不是一个函数，则增加（补充）成功的回调函数默认值
            if (!(onrejected instanceof Function)) {
                onrejected = (reason) => {
                    throw reason;
                };
            }
            // 判断
            // 调用then方法会得到一个新的Promise实例化对象
            return new Promise((resolve, reject) => {
                // 封装函数
                const _common = function (callback) {
                    // 调用成功时候的回调函数
                    // 如果要让回调函数慢于同步执行代码，只需要调用定时器即可
                    setTimeout(() => {
                        // 接收成功的回调函数的结果
                        try {
                            const value = callback(this.PromiseResult);
                            // 判断value是否为Promise的实例
                            if (value instanceof Promise) {
                                // prettier-ignore
                                // value.then( (v) => { resolve(v); }, (r) => { reject(r); } );

                                // 可以简化为
                                value.then(resolve, reject);
                            } else {
                                // 不是返回的Promise实例化对象
                                resolve(value);
                            }
                        } catch (error) {
                            // 如果有异常，则直接返回失败的Promise实例化对象，结果值为error参数
                            reject(error);
                        }
                    });
                };
                if (this.PromiseState === "fulfilled") {
                    _common.call(this, onfulfilled);
                } else if (this.PromiseState === "rejected") {
                    _common.call(this, onrejected);
                } else {
                    // 如果executor执行器函数当中执行的是异步程序，当结果还没有完全执行完毕（时间还没到达），此时Promise实例化对象的状态为pending状态
                    this.callbackFn.push({
                        // 添加两个回调函数
                        onfulfilled: _common.bind(this, onfulfilled),
                        onrejected: _common.bind(this, onrejected),
                    });
                }
            });
        },
        catch(onrejected) {
            return this.then(undefined, onrejected);
        },
    });
    window.Promise = Promise;
})(window);
