// 原始的 ajax 方法
function ajax(options) {
    // 模拟异步请求
    setTimeout(() => {
      if (Math.random() > 0.5) {
        options.success('请求成功');
      } else {
        options.fail('请求失败');
      }
    }, 1000);
  }
  
  // 封装的 myAjax 方法
  function myAjax(options) {
    return new Promise((resolve, reject) => {
      ajax({
        ...options, // 传递原始参数
        success(res) {
          resolve(res); // 成功时调用 resolve
        },
        fail(res) {
          reject(res); // 失败时调用 reject
        },
      });
    });
  }
  
  // 测试 myAjax
  myAjax({
    url: 'https://meituan.com',
  })
    .then(res => console.log('success', res))
    .catch(res => console.log('fail', res));