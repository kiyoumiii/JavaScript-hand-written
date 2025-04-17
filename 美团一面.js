function findMostFrequentCommonNumber(arr1, arr2) {
    // 创建两个 Map 来记录每个数字的出现频率
    const frequencyMap1 = new Map();
    const frequencyMap2 = new Map();

    // 遍历 arr1，记录每个数字的出现频率
    for (const num of arr1) {
        frequencyMap1.set(num, (frequencyMap1.get(num) || 0) + 1);
    }

    // 遍历 arr2，记录每个数字的出现频率
    for (const num of arr2) {
        frequencyMap2.set(num, (frequencyMap2.get(num) || 0) + 1);
    }

    let mostFrequentNumber = null;
    let maxFrequency = 0;

    // 遍历 frequencyMap1，找出在 arr2 中也出现且频率最高的数字
    for (const [num, freq1] of frequencyMap1) {
        if (frequencyMap2.has(num)) {
            const freq2 = frequencyMap2.get(num);
            const totalFrequency = freq1 + freq2;

            // 更新最频繁的数字
            if (totalFrequency > maxFrequency) {
                mostFrequentNumber = num;
                maxFrequency = totalFrequency;
            }
        }
    }

    return mostFrequentNumber;
}

// 测试用例
const arr1 = [1, 2, 2, 3, 4, 4, 4];
const arr2 = [2, 3, 3, 4, 4, 5];

console.log(findMostFrequentCommonNumber(arr1, arr2)); // 输出: 4