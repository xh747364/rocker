//process.nextTick方法指定的回调函数，总是在当前"执行栈"的尾部触发
process.nextTick(function A() {
    console.log(1);
    process.nextTick(function B(){console.log(2);});
});
setTimeout(function timeout() {
    console.log(3);
}, 0);
// 1
// 2
// 3