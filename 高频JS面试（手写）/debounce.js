function debounce(func, wait = 500, immediate = false) {
  let timer = null;
  return function anonymous(...params) {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      func.call(this, ...params);
    }, wait);
  }
}