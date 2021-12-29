const myFlat = (arr) => {
  let newArr = [];
  let cycleArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(item)) {
        cycleArray(item);
        continue;
      } else {
        newArr.push(item);
      }
    }
  }
  cycleArray(arr);
  return newArr;
}