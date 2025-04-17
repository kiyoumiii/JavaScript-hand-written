function bubbleSort(arr) {
    const n = arr.length;
    let swapped; // 标记是否发生交换
    for (let i = 0; i < n - 1; i++) {
      swapped = false; // 每轮开始时重置标记
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 交换
          swapped = true; // 发生交换
        }
      }
      if (!swapped) break; // 如果未发生交换，提前终止
    }
    return arr;
  }
  
  // 测试
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log('排序前:', arr);
  console.log('排序后:', bubbleSort(arr));