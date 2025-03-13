Function.prototype.myCall = function(context) {
    if (context === null || context === undefined) {
        context = window;
    } else {
        context = Object(context);
    }

    const fn = Symbol('fn'); // 当属性名是symbol类型时，必须使用context[fn]
    context[fn] = this; // 把this指向赋值给context[fn]
    const args = [...arguments].slice(1); // 得到参数列表args
    let result = context[fn](...args); //context[fn]是绑定到context上的目标函数，将参数展开调用目标函数
    delete context[fn]; // 删除临时绑定的函数
    return result;
}


// 自己手写

Function.prototype.myCall = function(context) {
    context = Object(context) || window;

    const fn = Symbol('fn');
    context[fn] = this;
    const args = [...arguments].slice(1);
    let result = context[fn](...args);
    delete context[fn];
    return result;
}