class Snake {
    // 表示蛇的元素
    element: HTMLElement;
    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake>div")!;
        this.bodies = this.element.getElementsByTagName("div");
    }

    // 获取蛇的坐标（蛇头）
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇的坐标（蛇头）
    set X(value: number) {
        if (value === this.X) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了！");
        }

        // 修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能往右移动；反之亦然！
        if (
            this.bodies[1] &&
            value === (this.bodies[1] as HTMLElement).offsetLeft
        ) {
            // console.log("水平方向发生了掉头");
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.left = value + "px";
        // 检查蛇头是否撞到自己
        this.checkHeadBody();
    }

    set Y(value: number) {
        if (value === this.Y) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了！");
        }

        // 修改Y时，是在修改垂直坐标，蛇在上下移动，蛇在向下移动时，不能往上移动；反之亦然！
        if (
            this.bodies[1] &&
            value === (this.bodies[1] as HTMLElement).offsetTop
        ) {
            // console.log("垂直方向发生了掉头");
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.top = value + "px";
        // 检查蛇头是否撞到自己
        this.checkHeadBody();
    }

    // 蛇增加身体的方法
    addBody() {
        // 向element中添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    // 蛇增加身体移动的方法
    moveBody() {
        /**
         * 将后边的身体设置为前边身体的位置
         */
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            const X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            const Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + "px";
            (this.bodies[i] as HTMLElement).style.top = Y + "px";
        }
    }

    // 检查蛇头是否撞到自己
    checkHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error("撞到自己了！");
            }
        }
    }
}

export default Snake;
