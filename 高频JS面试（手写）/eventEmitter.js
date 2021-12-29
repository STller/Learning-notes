class EventEmitter {
  constructor() {
    // 事件对象 存放订阅的名字和对象
    this.events = {};
  }

  // 订阅事件的方法
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }

  // 触发事件的方法
  emit(eventName) {
    // 遍历执行所有订阅的事件
    this.events[eventName] && this.events[eventName].forEach(cb => cb());
  }
}

let em = new EventEmitter();
function workDay() {
  console.log('每天工作')
}
function makeMoney() {
  console.log('赚100万')
}
function sayLove() {
  console.log('向喜欢的人示爱')
}
em.on('money', makeMoney);
em.on('love', sayLove);
em.on('work', workDay);

em.emit('money');
em.emit('love');
em.emit('work');