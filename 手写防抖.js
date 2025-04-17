// 在指定时间内多次调用，只执行最后一次，所以原理是每次都把之前的timeout给clear了
// 比较关键的信息就是：要先把之前的this和arguments保存下来，到setTimeout函数里面还要再把它们apply到func上
function debounce(func, wait) {
    let timeout; //首次调用时，是udf

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeout);

        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait)
    };

}

// 手写

function debounce(func, wait) {
    let timeout;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeout);

        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait)
    };
}