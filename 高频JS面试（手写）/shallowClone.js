const shallowClone = target => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (const prop in target) {
      if (Object.hasOwnProperty.call(target, prop)) {
        cloneTarget[prop] = target[prop]        
      }
    }
    return cloneTarget;
  } else {
    return target
  }
}

const obj = { a: 1, b: { c: 1 }}
const copy = shallClone(obj)
obj.a = 2
console.log(copy);
obj.b.c = 2
console.log(copy);
