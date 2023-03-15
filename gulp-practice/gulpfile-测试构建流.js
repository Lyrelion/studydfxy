// 当 gulp 执行的时候，会自动寻找这个文件 gulpfile.js

/**
 * 测试构建流：编译 less 文件 -> 将 css 写入 dist/style -> 触发页面更新
 */

// src() 表示创建一个读取文件系统的流，dest() 表示创建一个写入到文件系统的流
const { src, dest } = require("gulp");
// 串行
const { series } = require("gulp");
// 监听文件修改，实现热更新
const { watch } = require("browser-sync");
const browserSync = require("browser-sync");
// 处理转换 less 语句
const less = require('gulp-less');
// 自动增加 css 前缀
const autoprefixer = require('gulp-autoprefixer');

/**
 * 实现 less 转换 css，添加 css 前缀，并输出 css 文件
 */
const lessTask = () => {
  return src("src/style/*.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false, // 是否美化属性值
      })
    )
    .pipe(dest("dist/style"));
};

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
  watch("src/*.html", series(reloadTask));
  // 监听样式更新，触发两个任务
  watch("src/style/*.less", series(lessTask, reloadTask));
};

exports.default = browserTask;
