// 引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类
class GameControl {
    // 定义三个属性
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 积分盘
    scorePanel: ScorePanel;

    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = "";
    // 创建一个属性用来记录游戏是否结束
    isLive: boolean = true;

    // private timerId: null | NodeJS.Timeout = null;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 2);

        this.init();
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener("keydown", this.keydownHandler.bind(this));

        // 调用run方法，使蛇移动
        this.run();
    }
    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // 需要检查 event.key 的值是否合法（用户是否按了正确的按键）
        this.direction = event.key;
    }

    // 创建一个控制蛇移动的方法
    run() {
        /**
         * 根据方向（this.direction）来使蛇的位置改变
         */
        // 获取蛇当前坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        // 检查蛇是否吃到了食物
        this.checkEat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error: any) {
            this.isLive = false;
            // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
            alert(error.message + " GAME OVER!");
            return;
        }

        // 开启一个定时器调用
        this.isLive &&
            setTimeout(
                this.run.bind(this),
                300 - (this.scorePanel.level - 1) * 30
            );
    }

    // 定义一个方法，用来检查蛇是否迟到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            console.log("吃到食物了！");
            // 食物的位置要进行重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇也要增加一节
            this.snake.addBody();
        }
    }
}
export default GameControl;
