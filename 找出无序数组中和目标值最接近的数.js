function findClosestNumber(arr, target) {
    // 首先检查数组是否为空，如果为空则返回 null
    if (arr.length === 0) {
        return null;
    }
    // 初始化最接近的数为数组的第一个元素
    let closest = arr[0];
    // 初始化最小差值为第一个元素与目标值差值的绝对值
    let minDiff = Math.abs(arr[0] - target);

    // 遍历数组中的每个元素
    for (let i = 1; i < arr.length; i++) {
        // 计算当前元素与目标值差值的绝对值
        let currentDiff = Math.abs(arr[i] - target);
        // 如果当前差值小于最小差值
        if (currentDiff < minDiff) {
            // 更新最小差值
            minDiff = currentDiff;
            // 更新最接近的数为当前元素
            closest = arr[i];
        }
    }

    return closest;
}

// 示例用法
const array = [4, 7, 10, 13, 16];
const targetValue = 12;
const closestNumber = findClosestNumber(array, targetValue);
console.log(`与目标值 ${targetValue} 最接近的数是: ${closestNumber}`);