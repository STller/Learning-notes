function readFile(file) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(file);
    }, 1000);
  })
}

function asyncFunc(generator) {
  const iterator = generator(); // 接下来要执行next
  const next = (data) => {
    let { value, done } = iterator.next(data);
    if (done) return;
    value.then(data => {
      next(data);
    })
  }
  next();
}

asyncFunc(function* () {
  let data = yield readFile('a.js');
  data = yield readFile(data + 'b.js');
  return data;
})