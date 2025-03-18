function jsonp(url, params, callbackName) {
    return new Promise((resolve, reject) => {
      // 1. 创建全局回调函数
      window[callbackName] = function (data) {
        resolve(data); // 成功时返回数据
        cleanup(); // 清理资源
      };
  
      // 2. 将参数拼接到 URL 中
      const queryString = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
      const fullUrl = `${url}?${queryString}&callback=${callbackName}`;
  
      // 3. 创建 script 标签
      const script = document.createElement('script');
      script.src = fullUrl;
  
      // 4. 加载失败时的错误处理
      script.onerror = () => {
        reject(new Error('JSONP request failed'));
        cleanup();
      };
  
      // 5. 将 script 标签添加到文档中
      document.body.appendChild(script);
  
      // 6. 清理资源
      function cleanup() {
        document.body.removeChild(script); // 移除 script 标签
        delete window[callbackName]; // 删除全局回调函数
      }
    });
  }
  
  // 示例用法
  jsonp('https://api.example.com/data', { param1: 'value1', param2: 'value2' }, 'handleResponse')
    .then(data => {
      console.log('Received data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });