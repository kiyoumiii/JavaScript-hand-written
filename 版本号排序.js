function sortVersions(versions) {
    // 定义比较函数
    const compareVersions = (v1, v2) => {
        const parts1 = v1.split('.').map(Number);
        const parts2 = v2.split('.').map(Number);

        const maxLength = Math.max(parts1.length, parts2.length);

        for (let i = 0; i < maxLength; i++) {
            const num1 = parts1[i] || 0; // 如果超出范围，默认为 0
            const num2 = parts2[i] || 0; // 如果超出范围，默认为 0

            if (num1 < num2) return -1; // v1 小于 v2
            if (num1 > num2) return 1;  // v1 大于 v2
        }

        return 0; // v1 等于 v2
    };

    // 对版本号数组进行排序
    return versions.sort(compareVersions);
}

// 测试用例
const versions = ["1.0.2", "2.10.3", "1.0.0", "1.0", "1"];
console.log(sortVersions(versions));
// 输出: ["1", "1.0", "1.0.0", "1.0.2", "2.10.3"]