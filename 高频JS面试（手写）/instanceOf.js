function _instanceof(instanceObject, classFunc) {
  let classFunc = classFunc.prototype; // 取得当前类得原型
  let proto = instanceObject.__proto__; // 取得当前实例对象得原型链

  while (true) {
    if (proto === null) {
      // 找到了object得基类object.prototype.__proto__
      return false;
    }
    if (proto === classFunc) {
      // 在当前实例对象得原型链上，找到了当前类
      return true;
    }
    proto = proto.__proto__; // 
  }
}