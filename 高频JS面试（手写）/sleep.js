function sleep(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, wait);
  })
}

let sayHello = name => console.log(`hello ${name}`);

async function autoRun() {
  await sleep(1500);
  let demo1 = sayHello('11');
  await sleep(1500);
  let demo2 = sayHello('22');
  await sleep(1500);
  let demo3 = sayHello('33');
}

autoRun();