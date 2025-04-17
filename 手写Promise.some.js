Promise.some = function(promises, count) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises) || promises.length === 0 || count <= 0) {
            resolve([]); // 如果输入无效，返回空数组
            return;
        }

        const results = []; // 存储成功的结果
        let completed = 0; // 记录已完成的 Promise 数量

        promises.forEach((promise, index) => {
            Promise.resolve(promise) // 将非 Promise 值转换为 Promise
                .then((value) => {
                    if (results.length < count) {
                        results.push(value); // 存储成功的结果
                    }
                    if (results.length === count) {
                        resolve(results); // 如果达到 count 个成功结果，直接返回
                    }
                })
                .catch(() => {}) // 忽略失败的 Promise
                .finally(() => {
                    completed++;
                    if (completed === promises.length && results.length < count) {
                        resolve(results); // 所有 Promise 完成，但成功结果不足 count 个
                    }
                });
        });
    });
};