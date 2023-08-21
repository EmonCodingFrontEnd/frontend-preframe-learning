let a = 10;
// 是的
let bb = 10;

// noImplicitAny
function fn(a: number, b: number) {
    return a + b;
}

// noImplicitThis
function fn2(this: any) {
    console.log(this);
}

// strictNullChecks
let box1 = document.querySelector("box1");
box1?.addEventListener("click", function () {});
