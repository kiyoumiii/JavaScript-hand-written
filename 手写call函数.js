Function.prototype.myCall = function(context) {
    if (context === null || context === undefined) {
        context = window;
    } else {
        context = Object(context);
    }

    const fn = Symbol('fn');
    context[fn] = this;
    const args = [...arguments].slice(1);
    let result = context[fn](...args);
    delete context[fn];
    return result;
}