function myFreeze(obj) {
  if (obj instanceof Object) {
    Object.seal(obj); // 封闭对象
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {        
        Object.defineProperty(obj, key, {
          writable: false // 设置只读
        })
        myFreeze(obj[key]);
      }
    }
  }
}