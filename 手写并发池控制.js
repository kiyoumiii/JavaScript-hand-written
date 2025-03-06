// 定义一个异步函数，函数内部可以使用await
// poollimit是并发任务的最大数量
// array是任务数组，每个元素会被传递给iteratorFn执行
// iteratorFn是异步任务函数，接收任务数组的元素并返回一个Promise

async function asyncPool(poollimit, array, iteratorFn) {
    const ret = []; // 存储所有的异步任务
    const executing = []; // 存储正在执行的异步任务
    for (const item of array) {
        // 调用iteratorFn函数创建异步任务
        const p = Promise.resolve().then(() => iteratorFn(item, array));
        // 创建一个立即完成的promise，确保后续的.then可以正常执行
        // 调用iteratorFn创建异步任务，并将其包装为Promise
        ret.push(p); // 保存新的异步任务

        if (poollimit <= array.length) { //只有当任务数量超过poollimit时，才需要进行并发控制
            const e = p.then(() => executing.splice(executing.indexOf(e), 1)); // 从executing数组中移除当前任务
            executing.push(e); //保存正在执行的异步任务
            if (executing.length >= poollimit) {
                await Promise.race(executing); //等待较快的任务执行完成
            }
        }

    }

    return Promise.all(ret); //等待ret数组中的所有任务完成，并返回结果

}

