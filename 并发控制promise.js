class ConcurrencyController {
    constructor(maxConcurrenct = 2) {
        this.maxConcurrenct = maxConcurrency;
        this.running = 0;
        this.queue = [];
    }

    // 添加任务到控制器
    addTask(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({task, resolve, reject});
            this.runTasks();
        });
    }

    async runTasks() {
        // 如果当前运行的任务数小于最大并发数，且队列中有任务
        while(this.running < this.maxConcurrency && this.queue.length > 0) {
            this.running++; 
            const {task, resolve, reject} = this.queue.shift();

            try {
                // 执行任务并获取结果
                const result = await task();
                resolve(result);
            } catch (error) {
                reject(error);
            } finally {
                this.running--;
                // 任务完成，减少正在运行的任务数
                this.runTasks();
                // 继续执行队列中的任务
            }
        }
    }
}

// 下面是使用示例
const controller = new ConcurrencyController(2);

function createTask(id, delay) {
    return () => new Promise(resolve => {
        console.log('任务开始执行');
        setTimeout(() => {
            console.log('任务执行完成');
            resolve('任务结果');
        }, delay);
    });
}

for (let i = 1; i <= 5; i++) {
    controller.addTask(createTask(i, 1000*i))
        .then(result => console.log('收到结果'))
        .catch(error => console.log('发生错误'));
}