Function.prototype.call = function name(context, ...args) {
  context = context === null ? window : context;

  let contextType = typeof context;
  if (!/^(object|function)$/i.test(contextType)) {
    context = Object(context);
  }

  let result;
  context['fn'] = this;
  result = context['fn'](...args);
  delete context['fn'];
  return result;
}