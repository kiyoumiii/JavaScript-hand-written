// 基本实现
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// 使用示例
delay(1000).then(() => {
    console.log('1s后执行');
});