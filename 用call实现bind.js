//用call实现bind
Function.prototype.myBind = function(context, ...bindArgs) {
    const originalFunc = this;
    const boundFunc = function(...callArgs) {
        const isNewCall = this instanceof boundFunc;
        return originalFunc.apply(
            isNewCall ? this : context,
            [...bindArgs, ...callArgs]
        );
    };
    boundFunc.prototype = originalFunc.prototype;
    return boundFunc;
}

// 用apply实现bind
Function.prototype.myBind = function(context, ...bindArgs) {
    const originalFunc = this;
    return function(...callArgs) {
        return originalFunc.apply(context, [...bindArgs, ...callArgs]);
    }
}