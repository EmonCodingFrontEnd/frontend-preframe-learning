// 立即执行函数（IIFE）
// 好处：可以避免对外部的变量造成污染
(function (window) {
    function Promise(executor) {
        // 给Promise构造函数所产生的的实例化对象身上添加两个属性
        this.PromiseState = "pending";
        this.PromiseResult = undefined;
        executor();
    }
    window.Promise = Promise;
})(window);
