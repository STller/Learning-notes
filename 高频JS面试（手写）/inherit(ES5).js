function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

parent.prototype.getName = function () {
  return this.name;
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.getAge = function () {
  return this.age;
}

let girl = new Child('Lisa', 18);
girl.getName();