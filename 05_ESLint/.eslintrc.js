module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    globals: {
        /**
         * 定义 jQuery
         * 说明 $ 这个变量可以全局使用，无需定义
         * true-可以访问$，且可以修改$的值
         * false-可以访问$，但是不可以修改$的值
         */
        $: false,
        /**
         * 定义 lodash
         */
        _: false,
    },
    // extends: "eslint:all" // 内置，所有规则
    // extends: "eslint:recommended", // 内置，推荐规则
    extends: ["standard" /* 'eslint:recommended' */],
    // extends: "eslint-config-standard", // 第三方，标准规则
    // extends: "eslint-config-airbnb-base", // 第三方，airbnb公司规则
    // extends: "airbnb-base", // 第三方，airbnb公司规则
    // overrides: [
    //   {
    //     env: {
    //       node: true
    //     },
    //     files: [
    //       '.eslintrc.{js,cjs}'
    //     ],
    //     parserOptions: {
    //       sourceType: 'script'
    //     }
    //   }
    // ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "space-before-function-paren": 0, // 在 function 定义左括号之前强制执行一致的间距
        "array-bracket-spacing": 0, // 在数组括号内强制执行一致的间距
        quotes: ["off", "double"], // 强制一致使用反引号、双引号或单引号
        "comma-dangle": 0, // 要求或禁止尾随逗号
        indent: ["error", 4], // 强制执行一致的缩进
        semi: 0, // 0-关闭 1-警告 2-报错  要求或禁止使用分号而不是 ASI
    },
};
