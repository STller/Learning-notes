const isObject = target => (
  typeof target === 'object' || typeof target === 'function'
) && target !== null;

const deepClone = (target, map = Map()) => {
  // 先判断该引用类型是否被 拷贝过
  if (map.get(target)) {
    // 被拷贝过 直接返回
    return target;
  }
  // 获取当前值得构造函数：获取它的类型
  let constructor = target.constructor;
  // 检测当前对象target是否与 正则、日期格式对象匹配
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    return new constructor(target);
  }
  if (isObject(target)) {
    map.set(target, true); // 为循环引用得对象做标记
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (const prop in target) {
      if (Object.hasOwnProperty.call(target, prop)) {
        cloneTarget[prop] = deepClone(target[prop], true);        
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}