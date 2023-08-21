// 立即执行函数（IIFE）
// 好处：可以避免对外部的变量造成污染
(function (window) {
    // 声明Promise类
    class Promise {
        // executor表示的是执行器函数
        constructor(executor) {
            // 构造器中的this指向表示的是实例化对象

            this.PromiseState = "pending";
            this.PromiseResult = undefined;
            this.callbackFn = [];

            const _resolve = (value) => {
                if (this.PromiseState !== "pending") return;
                this.PromiseState = "fulfilled";
                this.PromiseResult = value;
                this.callbackFn.forEach((item) => {
                    if (item.onfulfilled) {
                        item.onfulfilled();
                    }
                });
            };

            const _reject = (reason) => {
                if (this.PromiseState !== "pending") return;
                this.PromiseState = "rejected";
                this.PromiseResult = reason;
                this.callbackFn.forEach((item) => {
                    if (item.onrejected) {
                        item.onrejected();
                    }
                });
            };

            try {
                executor(_resolve, _reject);
            } catch (error) {
                if (this.PromiseState !== "pending") return;
                if (error instanceof Error) {
                    this.PromiseState = "rejected";
                    this.PromiseResult = error.message;
                } else {
                    this.PromiseState = "rejected";
                    this.PromiseResult = error;
                }
            }
        }
        then(onfulfilled, onrejected) {
            if (!(onfulfilled instanceof Function))
                onfulfilled = (value) => value;
            if (!(onrejected instanceof Function))
                onrejected = (reason) => {
                    throw reason;
                };
            return new Promise((resolve, reject) => {
                const _common = function (callback) {
                    setTimeout(() => {
                        try {
                            const value = callback(this.PromiseResult);
                            if (value instanceof Promise) {
                                value.then(resolve, reject);
                            } else {
                                resolve(value);
                            }
                        } catch (error) {
                            reject(error);
                        }
                    });
                };

                if (this.PromiseState === "fulfilled")
                    _common.call(this, onfulfilled);
                else if (this.PromiseState === "rejected")
                    _common.call(this, onrejected);
                else
                    this.callbackFn.push({
                        onfulfilled: _common.bind(this, onfulfilled),
                        onrejected: _common.bind(this, onrejected),
                    });
            });
        }
        catch(onrejected) {
            return this.then(undefined, onrejected);
        }

        static resolve(value) {
            if (value instanceof Promise) {
                return value;
            } else {
                return new Promise((resolve) => resolve(value));
            }
        }
        static reject = function (value) {
            return new Promise((resolve, reject) => reject(value));
        };
        static all = function (promiseArr) {
            let count = 0;
            let successArr = new Array(promiseArr.length);
            return new Promise((resolve, reject) => {
                promiseArr.forEach((item, index) => {
                    item.then(
                        (value) => {
                            count++;
                            successArr[index] = value;
                            if (count === promiseArr.length) {
                                resolve(successArr);
                            }
                        },
                        // 如果有一个是失败的，则整体都是失败的
                        (reason) => {
                            reject(reason);
                        }
                    );
                });
            });
        };
        static race = function (promiseArr) {
            return new Promise((resolve, reject) => {
                promiseArr.forEach((item, index) => {
                    item.then(resolve, reject);
                });
            });
        };
    }
    window.Promise = Promise;
})(window);
