function isPromise(val) {
  return typeof val.then === 'function';
}

Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let arr = [], // 存放promise执行后的结果
        index = 0; // 计数器 累计promise的已执行次数
    const processData = (key, data) => {
      arr[key] = data;
      if (++index === promises.length) {
        resolve(arr);
      }
    }
    for (let i = 0; i < promises.length; i++) {      
      let result = promises[i];
      if (isPromise(result)) {
        result.then((data) => {
          processData(i, data);
        }, reject);
      } else {
        processData(i, result);
      }
    }
  })
}

let fs = require('fs').promises;