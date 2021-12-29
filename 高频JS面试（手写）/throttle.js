function throttle(func, wait) {
  let timer = null;
  let previous = 0; // 记录上一次操作的时间点
  return function anonymous(params) {
    let now = new Date(); // 当前操作的时间点
    remaining = wait - (now - previous); // 剩下的时间
    if (remaining <= 0) {
      // 两次间隔时间超过频率，把方法执行
      clearTimeout(timer); // 从系统中清除定时器 但timer值不会变为null
      timer = null; // 后续可以通过判断timer是否为null，而判断是否有 定时器
      previous = new Date(); // 修改上一次操作时间为当前时间
      func.call(this, ...params); // 执行func函数
    } else if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null; // 确保每次执行完的时候 timer都清0 回到初始状态

        previous = new Date();
        func.call(this, ...params);
      }, remaining);
    }
  }
}