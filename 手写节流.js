// 指定时间内，最多只执行一次

// 关键是用一个flag判断一下函数是否进入了节流状态，如若过说没有进入节流状态就设置为true，直到定时器达到时间了再设置为false

function throttle(func, limit) {
    let inThrottle;

    return function() {
        const context = this;
        const args = arguments;

        if(!inThrottle) {
            inThrottle = true;

            func.apply(context, args);

            setTimeout(() => {
                inThrottle  = false;
            }, limit)
        }
    };
}

// 手写

function throttle(func, limit) {
    let inThrottle;

    return function() {
        const context = this;
        const args = arguments;

        if (!inThrottle) {
            inThrottle = true;

            func.apply(context, args);

            setTimeout(() => {
                inThrottle = false;
            }, limit)
        }
    };
}

// 节流
function throttle(func, limit) {
    let inThrottle;

    return function() {
        const context = this;
        const args = arguments;

        if (!inThrottle) {
            inThrottle = true;

            func.apply(context, args);

            setTimeout(() => {
                inThrottle = false;
            }, limit)
        }
    };
}
 