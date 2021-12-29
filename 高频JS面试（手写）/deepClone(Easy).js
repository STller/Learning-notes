const deepClone = target => {
  if (!target) return null;
  if (typeof target !== 'object') return target;

  const cloneTarget = Array.isArray(target) ? []:{}
  for (const prop in target) {
    if (Object.hasOwnProperty.call(target, prop)) {
      cloneTarget[prop] = deepClone(target[prop])      
    }
  }

  return cloneTarget;
}

const obj = { a: 1, b: { c: 2}}

console.time('start');
const copy = deepClone(obj)
obj.b.c = 4;
console.log(copy);

console.timeEnd('start');