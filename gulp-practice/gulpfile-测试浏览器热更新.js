// 当 gulp 执行的时候，会自动寻找这个文件 gulpfile.js

// 串行
const { series } = require("gulp");
// 监听文件修改，实现热更新
const { watch } = require("browser-sync");
const browserSync = require("browser-sync");

/**
 * 页面刷新
 */
const reloadTask = () => {
  browserSync.reload();
};

/**
 * 浏览器监听文件修改，实现热更新（HMR）
 */
const browserTask = () => {
  browserSync.init({
    server: {
      baseDir: "src/",
    },
  });
  watch("src/*", series(reloadTask));
};

exports.default = browserTask;