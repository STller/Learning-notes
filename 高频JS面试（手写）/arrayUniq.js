let arr = [12, 23, 12, 15, 25, 23, 16, 25, 16];

// 方法1 
// 数组最后一项元素替换掉当前项元素 并删除最后一项元素
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]; // 取得当前数组中的每一项
  let remainArgs = arr.splice(i+1); // 从i+1项开始截取数组中剩余元素 包括i+1位置的元素
  if (remainArgs.indexOf(item) > -1) { // 数组的后面元素 包含当前项
    arr[i] = arr[arr.length - 1];
    arr.length --;
    i --;
  }
}

// 方法2
// 新容器存储思想-对象键值对
let obj = {};
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]; // 取得当前项
  if (typeof obj[item] !== 'undefined') {
    // obj中存在当前属性 则证明当前项 之前已经是obj属性了
    // 删除当前项
    arr[i] = arr[arr.length - 1];
    arr.length --;
    i --;
  }  
  obj[item] = item;
}
obj = null; // 垃圾回收
console.log(arr);

// 方法3
// 相邻项的处理方案思想-基于正则
let arr = [12, 23, 12, 15, 25, 23, 16, 25, 16];
arr.sort((a, b) => a - b);
arrStr = arr.join('@') + '@';
let reg = /(\d+@)\1*/g,
    newArr = [];
arrStr.replace(reg, (val, group1) => {
  newArr.push(parseFloat(group1));
})