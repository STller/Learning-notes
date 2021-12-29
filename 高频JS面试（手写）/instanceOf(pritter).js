function _instanceof(instanceObject, classFunc) {
  let classFunc = classFunc.prototype; // 取得当前类的原型
  let proto = Object.getPrototypeOf(instanceObject); // 取得当前实例对象的原型链上的属性

  while (true) {
    if (proto === null) { // 找到了object的基类
      return false;
    }
    if (proto === classFunc) {
      // 在当前实例对象的原型链上，找到了当前类
      return true;
    }
    proto = Object.getPrototypeOf(proto); // 沿着原型链 一层一层向上查找
  }
}