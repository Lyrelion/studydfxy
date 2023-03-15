// 当 gulp 执行的时候，会自动寻找这个文件 gulpfile.js

// src() 表示创建一个读取文件系统的流，dest() 表示创建一个写入到文件系统的流
const { src, dest } = require("gulp");
// 处理转换 less 语句
const less = require('gulp-less');
// 自动增加 css 前缀
const autoprefixer = require('gulp-autoprefixer');

/**
 * 实现 less 转换 css，添加 css 前缀，并输出 css 文件
 */
const lessTask = () => {
  return src('src/style/*.less').pipe(less()).pipe(
    autoprefixer({
      overrideBrowserslist: ["> 1%", "last 2 versions"],
      cascade: false, // 是否美化属性值
    })
  ).pipe(dest('dist/style'));
};

exports.default = lessTask;
