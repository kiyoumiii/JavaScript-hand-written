// 需要3个辅助：resolvedCounter,promiseNum,resolvedResult

function promiseAll(promises) {
    return new Promise(function(resolve,reject) {
        if(!Array.isArray(promises)) {
            throw new TypeError('argument must be a array');
        }

        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedResult = [];

        for(let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i].then(value => {
                resolvedCounter++;
                resolvedResult[i] = value;
                if (resolvedCounter === promiseNum) {
                    return resolve(resolvedResult);
                }
            },error => {
                return reject(error);
            }))
        }

    })
}


// 自己一刷

function promiseAll(promise) {
    return new Promise(function(resolve,reject) {
        if (!Array.isArray(promise)) {
            throw new TypeError('arguments need a Array');
        }

        let resolvedCounter = 0;
        let resolvedResult = [];
        const promiseNum = promise.length;

        for (let i = 0; i < promise.length; i++) {
            promise[i].then((value) => {
                resolvedCounter++;
                resolvedResult[i] = value; // 用索引i别用push保证一下正确
                if (resolvedCounter === promiseNum) {
                    return resolve(resolvedResult); // 千万别写成resolve(value)啊
                }
            }, (error) => {
                reject(error); // 只要有一个promise失败，就reject整个promise
            })
        }

    })
}

// 测试示例

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

promiseAll([promise1, promise2, promise3]).then((result) => {
    console.log(results);
}).catch((error) => {
    console.error(error);
})