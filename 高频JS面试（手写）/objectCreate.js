Object.create() = function create(prototype) {
  // 排除传入的对象是null 和 非object的情况
  if (prototype === null || typeof prototype !== 'object') {
    throw new TypeError(`Object prototype may only be an Object: ${prototype}`);
  }
  function Temp() {
  }
  Temp.prototype = prototype;
  return new Temp;
}