Function.prototype._bind = function name(context, ...params) {
  let _this = this;
  return function anonymous(...args) {
    _this.call(context, ...params.concat(args));
  }
}