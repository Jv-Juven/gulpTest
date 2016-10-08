console.log("Hello, Gulp");
var func = function () {
    if (!this.name) {
        this.name = "这个函数的默认名称";
    }
    console.log("名称是", this.name);
}
