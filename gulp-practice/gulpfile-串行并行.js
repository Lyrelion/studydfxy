// 当 gulp 执行的时候，会自动寻找这个文件 gulpfile.js

// 串行、并行
const { series, parallel } = require("gulp");

// 任务是一个回调函数，有两种写法，①可以接收回调函数并执行；②可以返回一个 promise
const task1 = () => {
  console.log("task1");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

// 任务是一个回调函数，有两种写法，①可以接收回调函数并执行；②可以返回一个 promise
const task2 = () => {
  console.log("task2");
  return Promise.resolve();
};

// 串行 - series
// exports.default = series(task1, task2);

// 并行 - parallel
exports.default = parallel(task1, task2);