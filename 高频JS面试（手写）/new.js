function _new(Func, ...args) {
  let obj = {};
  obj.__proto__ = Func.prototype;

  let result = Func.call(obj, ...args);

  if (result !== null && /^(object|function)$/.test(typeof result)) {
    return result;
  }

  return obj;
}
